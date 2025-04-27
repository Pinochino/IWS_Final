const mongoose = require('mongoose');

const checkoutItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    name:{
        type: String,
    },
    image:{
        type:String,
    },
    price:{
        type: Number,
    },
    quantity:{
        type:Number,
        min:1,
    },
    
},
{_id:false}
);

const checkoutSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    checkoutItems:[checkoutItemSchema],
    shippingAddress:{
        address:{ type:String},
        city:{type:String},
        country:{type:String},
        postalCode:{type:String},
    },
    paymentMethod:{
        type:String,
    },
    totalPrice:{
        type:Number,
    },
    isPaid:{
        type:Boolean,
        default:false
    },

    paidAt:{
        type:Date,
    },
    paymentStatus:{
        type:String,
        default:"pending",
    },

    paymentDetails:{
        type: mongoose.Schema.Types.Mixed,//store payment-related details (transaction ID, paypal response)

    },
    isFinalized:{
        type:Boolean,
        default:false,
    },
    finalizedAt:{
        type:Date,
    },
},
{timestamps:true}
);

module.exports=mongoose.model("Checkout",checkoutSchema);