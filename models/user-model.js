import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
    minLength: 3,
    maxLength: 15,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

const User = mongoose.model("user", userSchema);

export default User;
