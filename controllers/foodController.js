import fs from 'fs';
import foodModel from '../models/foodModel.js';

//add food item 

// const addFood = async (req, res) => {

//     let image_filename = `${req.file.filename}`;

//     const food = new foodModel({
//         name: req.body.name,
//         description: req.body.description,
//         price: req.body.price,
//         image: image_filename,
//         category: req.body.category,
//     });

//     try {
//         await food.save();
//         res.json({ success:true, message: "Food item added successfully" });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error adding food item" });
//     }

// }

const addFood = async (req, res) => {
  try {
    console.log("DEBUG req.file:", req.file);
    const image_filename = req.file ? req.file.filename : "";
    console.log("DEBUG image_filename:", image_filename);

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: Number(req.body.price),
      image: image_filename,
      category: req.body.category,
    });

    await food.save();
    res.json({ success: true, message: "Food item added successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error adding food item" });
  }
};


const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching food items" });
    }
}

// delete method

const deleteFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    if (!food) {
      return res.json({ success: false, message: "Food item not found" });
    }

    // only delete file if image exists
    if (food.image) {
      try {
        fs.unlinkSync(`uploads/${food.image}`);
      } catch (err) {
        console.warn("No image file found, skipping unlink.");
      }
    }

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({ success: true, message: "Food item deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error deleting food item" });
  }
};



export { addFood, listFood, deleteFood };