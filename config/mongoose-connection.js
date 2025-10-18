import mongoose from "mongoose";
import debug from "debug";
import config from "config";

const dbgr = debug("development:mongoose");

mongoose
.connect(config.get("MONGO_URI")+"/scatch")
.then(() => {
  dbgr("MongoDB connected successfully");
})
.catch((err) => {
  dbgr("MongoDB connection error:", err);
});

export default mongoose.connection;