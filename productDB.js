const connectDB = require("./DB/connect");

const Product = require("./Models/Products");

const ProductJson = require("./products.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJson);
        console.log("sucsess");
    } catch (error) {
        console.log(error);
    }
};

start();