import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  image: {
    type: String,
    default: "https://via.placeholder.com/150",
  },
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolor: {
    type: String,
    default: "#FFFFFF",
  },
  panelcolor: {
    type: String,
    default: "#d2d2d2ff",
  },
  textcolor: {
    type: String,
    default: "#000000",
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
