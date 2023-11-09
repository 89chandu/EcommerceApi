const req = require("express/lib/request");

const getAllProducts = async(req,res) => {
    res.status(200).json({msg: "i am get all products"});
};

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg: "i am getAllProductsTesting"});
};

module.exports = {getAllProducts,getAllProductsTesting};