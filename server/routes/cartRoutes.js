const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//function to get cart by user Id or guest Id
const getCart = async (userId) => {
  if (userId) {
    return await Cart.findOne({ userId }).populate('items');
  }  else {
    return null;
  }
};

//@route POST api/cart
//@desc Add a product to the cart for a guest or logged in user
//@access public
router.post("/", async (req, res) => {
  try {
    const { productId, quantity,  userId } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    //determine the cart owner
    let cart = await getCart(userId);

    //if cart exist, update it
    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId 
      );

      if (itemIndex > -1) {
        //update quantity if product exists
        cart.items[itemIndex].quantity += quantity;
      } else {
        //add new item if product doesn't exist
        cart.items.push({
          productId,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          quantity,
        });
      }
      //recalculate the total price
      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      //save cart
      await cart.save();
      res.status(200).json(cart);
    } else {
      //create a new cart for the guest user or user
      const newCart = await Cart.create({
        user: userId ? userId : undefined,
        items: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @route PUT/api/cart
//@desc Update the quantity of a product in the cart
//@access public
router.put("/", protect, async (req, res) => {
  const { productId, quantity, size, userId } = req.body;

  try {
    let cart = await getCart(userId);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId && item.size === size
    );

    if (itemIndex > -1) {
      //update quantity
      if (quantity > 0) {
        cart.items[itemIndex].quantity = quantity;
      } else {
        cart.items.splice(itemIndex, 1); //Remove product if quantity is 0
      }

      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route DELETE /api/cart
//@desc Delete a product from the cart
//@access public
router.delete("/:productId/:userId", async (req, res) => {
  const { productId, userId } = req.params;
  console.log(productId, userId);
  try {
    let cart = await getCart(userId);

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      cart.totalPrice = cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Item not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route GET/api/cart
//@desc Get the cart for a guest or logged in user
//@access public
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await getCart(userId);
    if (cart) {
      res.json(cart);
    } else {
      return res.status(404).json({ message: "Cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

//@route POST /api/cart/merge
//@desc Merge guest cart into user cart login
//@access private
router.post("/merge", protect, async (req, res) => {
  const { guestId } = req.body;

  try {
    //Find the guest cart or user cart

    const guestCart = await Cart.findOne({ guestId });
    const userCart = await Cart.findOne({ user: req.user.id });

    if (guestCart) {
      if (guestCart.items.length === 0) {
        return res.status(404).json({ message: "Guest cart is empty" });
      }
      if (userCart) {
        //merge guest cart into user cart
        guestCart.items.forEach((guestItem) => {
          const itemIndex = userCart.items.findIndex(
            (item) =>
              item.productId.toString() === guestItem.productId.toString() &&
              item.size === guestItem.size
          );

          if (itemIndex > -1) {
            //update quantity if item exists
            userCart.items[itemIndex].quantity += guestItem.quantity;
          } else {
            //add new item if it doesn't exist
            userCart.items.push(guestItem);
          }
        });
        userCart.totalPrice = userCart.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        await userCart.save();
        // Remove cart after merge
        try {
          await Cart.findByIdAndDelete(guestCart._id);
        } catch (error) {
          console.error("Error deleting guest cart:", error);
        }
        res.status(200).json(userCart);
      } else {
        //If the user has no existing cart, assign guest cart to the user
        guestCart.user = req.user.id;
        guestCart.guestId = undefined;
        await guestCart.save();
        res.status(200).json(guestCart);
      }
    } else {
      if (userCart) {
        //Guest cart has already merged, return user cart
        return res.status(200).json(userCart);
      }
      return res.status(404).json({ message: "Huest cart not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
