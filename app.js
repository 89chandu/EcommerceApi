const Express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser')
const StoreRoute = require("./Routes/StoreItems");
const CartRoute = require('./Routes/CartItems');
// const products_routes = require("./Routes/Product");
const UserRoute = require('./Routes/Users');
const connectDB = require("./DB/connect");
const cors = require('cors');
const app = Express();


 
app.use(cors());
app.use(bodyParser.json());
app.use("/store", StoreRoute);
app.use('/cart', CartRoute);
// app.use('/products', ProductRoute);
app.use('/users', UserRoute)
// app.use("/api/products", products_routes);



const PORT = process.env.PORT||3005
async function serverStart() {
	try {
		await connectDB(process.env.MONGODB_URL);
		app.listen(PORT, () => {
			console.log(`Yes I am connected ${PORT}`);

		});
	} catch (error) {
		console.log(error);
	}
}
serverStart();
