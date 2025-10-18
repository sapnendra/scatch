import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import db from "./config/mongoose-connection.js";
import ownersRouter from './routes/ownersRouter.js';
import usersRouter from './routes/usersRouter.js';
import productsRouter from './routes/productsRounter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));
app.set('view engine', 'ejs');

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});