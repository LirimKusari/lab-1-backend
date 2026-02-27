import express from "express";
import cors from "cors";
import e from "express";
import "dotenv/config";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// api endpoints
app.use("/images", express.static("uploads"));
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
