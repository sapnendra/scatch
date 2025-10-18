import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { error: [12, 23] });
});

export default router;
