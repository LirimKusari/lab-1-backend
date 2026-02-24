// import express from "express";
// import { addFood } from "../controllers/foodController.js";
// import multer from "multer";

// const foodRouter = express.Router();

// // Image Storage Engine

// // cb = callback
// const storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req, file, cb) => {
//         return cb(null, `${Date.now()}${file.originalname}`)
//     }
// });

// const upload = multer({ storage: storage });    upload.single("image"),

// // routes
// foodRouter.post("/add", addFood);

// export default foodRouter;

import express from 'express';
import multer from 'multer';
import { addFood, listFood, deleteFood } from '../controllers/foodController.js';

const router = express.Router();

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder where images will be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/add', upload.single('image'), addFood);

router.get("/list", listFood);

router.delete("/delete", deleteFood);



export default router;
