import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app configuration
const app = express();
const port = 4000;

//middlewares
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
// app.use('/images',express.static('uploads'));
app.use("/api/user", userRouter);

app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
