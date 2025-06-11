const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Product", ProductSchema);