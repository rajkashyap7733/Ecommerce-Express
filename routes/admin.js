const express = require("express");
const {
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/adminController");
const { protect } = require("../middleware/auth");
const { admin } = require("../middleware/admin");
const router = express.Router();

router.post("/product", protect, admin, addProduct);
router.put("/product/:id", protect, admin, updateProduct);
router.delete("/product/:id", protect, admin, deleteProduct);

module.exports = router;
