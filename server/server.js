const express=require("express");
const cors= require("cors");
const dotenv= require("dotenv");
const connectDB=require("./config/db");
const userRoutes=require("./routes/userRoutes");
const productRoutes=require("./routes/productRoutes");
const categoryRoutes=require("./routes/categoryRoutes");
const cartRoutes=require("./routes/cartRoutes");
const checkoutRoutes=require("./routes/checkoutRoutes");
const orderRoutes=require("./routes/orderRoutes");
const uploadRoutes=require("./routes/upload");
const adminRoutes=require("./routes/adminRoutes");
const cookieParser = require("cookie-parser");


const app = express(); 
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",  // Thay đổi URL này nếu frontend của bạn không chạy ở port 3000
    credentials: true,  // Cho phép cookie được gửi từ frontend
}));


dotenv.config();
console.log(process.env.PORT);

const PORT = process.env.PORT || 2025;

//Connect to MongoDB
connectDB();

app.get("/",(req,res)=>{
    res.send("Welcom to POPMART APi")
});

//API Routes
app.use("/api/users",userRoutes);

app.use("/api/products",productRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/cart", cartRoutes);

app.use("/api/checkout",checkoutRoutes);

app.use("/api/orders",orderRoutes);

app.use("/api/upload",uploadRoutes);

app.use("/api/admin",adminRoutes);

app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});