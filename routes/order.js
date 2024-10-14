const express = require("express");
const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");
const { protect } = require("../middleware/auth");
const { admin } = require("../middleware/admin");
const router = express.Router();

router.get("/", protect, admin, getAllOrders); // Admins can view all orders
router.get("/:id", protect, getOrderById); // Users can view their own orders
router.post("/", protect, createOrder);
router.put("/:id/status", protect, admin, updateOrderStatus); // Admins can update order status
router.delete("/:id", protect, admin, deleteOrder); // Admins can delete orders

module.exports = router;
