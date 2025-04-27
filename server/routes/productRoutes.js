const express = require("express");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");
const mongoose = require("mongoose");
const Category = require("../models/Category");

const router = express.Router();

// @route   POST /api/product/create
//@desc    Create one or multiple new products (admin only)
//@access  Private/Admin
router.post("/create", protect, isAdmin, async (req, res) => {
    try {
        const { products } = req.body;

        // If products array is provided, create multiple products
        if (Array.isArray(products)) {
            const createdProducts = [];
            const errors = [];
            const session = await mongoose.startSession();
            session.startTransaction();

            try {
                for (const productData of products) {
                    try {
                        const {
                            category,
                            name,
                            description,
                            price,
                            discountPrice,
                            countInStock,
                            character,
                            material,
                            images,
                            isFeatured,
                            isPublished,
                            tags,
                            dimensions,
                            weight,
                            sku,
                        } = productData;

                        // Validation for each product
                        if (!name || !price || !category || !character) {
                            errors.push({
                                product: productData,
                                error: "Name, price, category and character are required fields"
                            });
                            continue;
                        }

                        // Check if category exists
                        const categoryExists = await Category.findById(category);
                        if (!categoryExists) {
                            errors.push({
                                product: productData,
                                error: "Category not found"
                            });
                            continue;
                        }

                        // Check if SKU already exists
                        if (sku) {
                            const existingProduct = await Product.findOne({ sku });
                            if (existingProduct) {
                                errors.push({
                                    product: productData,
                                    error: "SKU already exists"
                                });
                                continue;
                            }
                        }

                        if (typeof price !== 'number' || (discountPrice && typeof discountPrice !== 'number')) {
                            errors.push({
                                product: productData,
                                error: "Price and discount price must be numbers"
                            });
                            continue;
                        }

                        if (price < 0 || (discountPrice && discountPrice < 0)) {
                            errors.push({
                                product: productData,
                                error: "Price and discount price must be positive numbers"
                            });
                            continue;
                        }

                        if (!Array.isArray(images) || images.length === 0) {
                            errors.push({
                                product: productData,
                                error: "At least one product image is required"
                            });
                            continue;
                        }

                        // Validate image URLs
                        for (const image of images) {
                            try {
                                new URL(image.url);
                            } catch (e) {
                                errors.push({
                                    product: productData,
                                    error: "Invalid image URL format"
                                });
                                continue;
                            }
                        }

            
                        const product = new Product({
                            name,
                            description,
                            price,
                            discountPrice,
                            countInStock,
                            character,
                            material,
                            images,
                            isFeatured,
                            isPublished,
                            tags,
                            category,
                            dimensions,
                            weight,
                            sku,
                            user: req.user._id,
                        });

                        const createdProduct = await product.save({ session });
                        createdProducts.push(createdProduct);
                    } catch (error) {
                        errors.push({
                            product: productData,
                            error: error.message
                        });
                    }
                }

                if (errors.length > 0) {
                    await session.abortTransaction();
                } else {
                    await session.commitTransaction();
                }

                return res.status(201).json({
                    success: true,
                    message: `Successfully created ${createdProducts.length} products${errors.length > 0 ? `, ${errors.length} failed` : ''}`,
                    products: createdProducts,
                    errors: errors.length > 0 ? errors : undefined
                });
            } catch (error) {
                await session.abortTransaction();
                throw error;
            } finally {
                session.endSession();
            }
        }

        // Single product creation
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            character,
            material,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
        } = req.body;

        // Validation
        if (!name || !price || !category || !character) {
            return res.status(400).json({ 
                success: false,
                message: "Name, price, category and character are required fields" 
            });
        }

        // Check if category exists
        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(400).json({ 
                success: false,
                message: "Category not found" 
            });
        }

        // Check if SKU already exists
        if (sku) {
            const existingProduct = await Product.findOne({ sku });
            if (existingProduct) {
                return res.status(400).json({ 
                    success: false,
                    message: "SKU already exists" 
                });
            }
        }

        if (typeof price !== 'number' || (discountPrice && typeof discountPrice !== 'number')) {
            return res.status(400).json({ 
                success: false,
                message: "Price and discount price must be numbers" 
            });
        }

        if (price < 0 || (discountPrice && discountPrice < 0)) {
            return res.status(400).json({ 
                success: false,
                message: "Price and discount price must be positive numbers" 
            });
        }

        if (!Array.isArray(images) || images.length === 0) {
            return res.status(400).json({ 
                success: false,
                message: "At least one product image is required" 
            });
        }

        // Validate image URLs
        for (const image of images) {
            try {
                new URL(image.url);
            } catch (e) {
                return res.status(400).json({ 
                    success: false,
                    message: "Invalid image URL format" 
                });
            }
        }

        // Validate dimensions if provided
        if (dimensions) {
            if (typeof dimensions.length !== 'number' || 
                typeof dimensions.width !== 'number' || 
                typeof dimensions.height !== 'number') {
                return res.status(400).json({ 
                    success: false,
                    message: "Dimensions must be numbers" 
                });
            }
        }

        // Validate weight if provided
        if (weight && typeof weight !== 'number') {
            return res.status(400).json({ 
                success: false,
                message: "Weight must be a number" 
            });
        }

        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            character,
            material,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
            user: req.user._id,
        });

        const createdProduct = await product.save();
        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product: createdProduct
        });
    } catch (error) {
        console.error('Product creation error:', error);
        res.status(500).json({ 
            success: false,
            message: "Server error", 
            error: error.message 
        });
    }
});


//@route PUT/api/product/:id
//@desc Update existing product by ID
//@access private/admin
router.put("/:id",protect,isAdmin ,async(req,res)=>{
    try {

        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            character,
            material,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
        } = req.body;

        //Find prodct by ID
        const product= await Product.findById(req.params.id);
        
        if(product){
            //Update product fields
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price; // !!! CẢNH BÁO: Sẽ không cập nhật nếu price = 0
            product.discountPrice = discountPrice || product.discountPrice; // !!! CẢNH BÁO: Sẽ không cập nhật nếu discountPrice = 0
            product.countInStock = countInStock || product.countInStock; // !!! CẢNH BÁO: Sẽ không cập nhật nếu countInStock = 0
            product.category = category || product.category; // Chỉ hoạt động nếu category là truthy (không phải null/undefined)
            product.character = character || product.character; // Chỉ hoạt động nếu character là truthy (không phải null/undefined)
            product.material = material || product.material;
            product.images = images || product.images; // !!! CẢNH BÁO: Có thể không hoạt động như mong đợi với mảng
            product.isFeatured = 
                isFeatured !==undefined ? isFeatured: product.isFeatured; // !!! CẢNH BÁO: Sẽ không cập nhật thành false
            product.isPublished = 
                isPublished !==undefined ? isPublished: product.isPublished; // !!! CẢNH BÁO: Sẽ không cập nhật thành false
            product.tags = tags || product.tags; // !!! CẢNH BÁO: Có thể không hoạt động như mong đợi với mảng
            product.dimensions = dimensions || product.dimensions; // !!! CẢNH BÁO: Có thể không hoạt động như mong đợi với object
            product.weight = weight || product.weight; // !!! CẢNH BÁO: Sẽ không cập nhật nếu weight = 0
            product.sku = sku || product.sku;
            

            const updatedProduct=await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({
                message: "Product not found"
            });
        }   
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});


//@route DELETE/api/product/:id
//@desc Delete existing product by ID
//@access private/admin
router.delete("/:id", protect,isAdmin,async(req,res)=>{
    
    try {
        //Find Product by ID
        const product= await Product.findById(req.params.id);

        if(product){
            //Remove the product from DB
            await product.deleteOne();
            res.json({ message:"Product removed"});

        }else{
            res.status(404).json({
                message: "Product not found"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
        
    }
});

//@route GET/api/products
//@desc Get all products with optional query filters
//@access Public
router.get("/",async (req,res)=>{
    try {
        
        const{category,character,sortBy,search,limit,page}= req.query;

        let query={};

        //Filter

        if (character && character.toLowerCase() !== "all"){
            query.character= character;
        }

        if (category && category.toLowerCase() !== "all"){
            query.category= category;
        }
        
        if(search){
            const searchRegex = new RegExp(search, 'i');
            query.$or=[
                {name: searchRegex},
                {character: searchRegex},
                {description: searchRegex},
                {tags: searchRegex}
            ];
        }

        //Sort
        let sort={};
        if(sortBy){
            switch (sortBy){
                case"priceAsc":
                    sort={price:1};
                break;
                case"priceDesc":
                    sort={price:-1};
                break;
                case"recommended":
                    sort= {rating:-1};
                break;
                case"lastArrival":
                    sort={createdAt:-1};
                break;
                case"bestSelling":
                    sort={sold:-1};
                break;
                default:
                    break;

            }
        }
        //Fetch products and apply sorting and limit
        const pageSize = Number(limit) || 10; // Mặc định 10 sản phẩm mỗi trang
        const currentPage = Number(page) || 1;
        const skip = (currentPage - 1) * pageSize;

        // Count total products first
        const totalProducts = await Product.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / pageSize);

        let products = await Product.find(query)
            .sort(sort)
            .limit(pageSize)
            .skip(skip);

        res.json({
            success: true,
            products,
            totalProducts,
            totalPages,
            currentPage,
            pageSize
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

//@routes GET/api/products/best-seller
//@desc Retreive the product with highest order quantity
//@access Public
router.get("/best-seller", async(req,res)=>{
    try {
        const bestSeller= await Product.find().sort({rating:-1}); //doi thanh ordercount
        if(bestSeller){
            res.json(bestSeller);
        }else{
            res.status(404).json({
                message: "No best seller product found"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

//@route GET/api/products/new-arrivals
//@desc Retreive latest 8 products- creation date
//@access Public
router.get("/new-arrivals",async(req,res)=> {
    try {
        //Fetch 8 products
        const newArrivals= await Product.find().sort({createdAt:-1}).limit(8);
        res.json(newArrivals);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
})
//@route GET/api/products/:id
//@desc Get single product by ID
//@access Public
router.get("/:id",async(req,res)=>{
    try {
        const product= await Product.findById(req.params.id);
        if(product){
            res.json(product);
        }else{
            res.status(404).json({
                message: "Product not found"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
        
});

//@route GET/api/products/similar/:id
//@desc Get similar products by category and character
//@access Public
router.get("/similar/:id",async(req,res)=>{
    
    const {id}= req.params;
    try {
        const product= await Product.findById(id);
        if(!product){
            return res.status(404).json({
                message: "Product not found"
            });
        }
        
        const similarProducts= await Product.find({
            category: product.category,
            character: product.character,
            _id: {$ne: id}
        })
        .limit(4);
        res.json(similarProducts);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
}});






module.exports = router;