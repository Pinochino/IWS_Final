const mongoose =require("mongoose");

const productSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type: Number,
        required:true,
    },
    discountPrice:{
        type:Number,
    },
    quantity:{
        type:Number,
        required:true,
        default:0,
    },
    category:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    images:[{url:{
        type:String,
        required:true,
    },
    allText:{
        type:String,

    }}
],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },  
    sold: {
        type: Number,
        default: 0,
    },
},
{timestamps:true}
);

module.exports= mongoose.model("Product",productSchema);