const Product = require("../models/Products");

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  const product = new Product({ name, description, price, category, stock });

  await product.save();
  res.status(201).json({ message: "Product added successfully", product });
};

// Update product
exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.category = req.body.category || product.category;
    product.stock = req.body.stock || product.stock;
    await product.save();
    res.json({ message: "Product updated", product });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product deleted" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};
