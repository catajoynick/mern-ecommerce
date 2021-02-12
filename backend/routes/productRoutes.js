import Product from "../models/productModel.js";
import ash from "express-async-handler";
import express from "express";
const router = express.Router();

//@desc    Fetch all products from db
//@route   /api/products
//@access  Public
router.get(
  "/",
  ash(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
//@desc    Fetch a single product in db given id
//@route   /api/products/:id
//@access  Public
router.get(
  "/:id",
  ash(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404);
      throw new Error("Product not found");
    }
    res.json(product);
  })
);

export default router;
