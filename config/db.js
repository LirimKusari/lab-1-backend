import mongoose from "mongoose";

export const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || "mongodb+srv://LirimUbt:liro1234@cluster0.cld0cru.mongodb.net/?appName=Cluster0";
  
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("DB connected"))
    .catch((error) => {
      console.error("DB connection error:", error.message);
      process.exit(1);
    });
};
