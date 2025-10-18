import mongoose from "mongoose";

const ownerSchema = mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    minLength: 3,
  },
  email: String,
  password: String,
  contact: Number,
  products: {
    type: Array,
    default: [],    
  },
  picture: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  gstin: String,
});

const Owner = mongoose.model("owner", ownerSchema);

export default Owner;
