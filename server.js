import express from "express";
import cors from "cors";
import e from "express";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// api endpoints
app.use('/api/food', foodRouter);
app.use('/images',express.static('uploads'));

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
