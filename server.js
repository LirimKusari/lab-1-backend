import express from "express";
import cors from "cors";
import e from "express";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("api working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
