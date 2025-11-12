import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  image: {
    data: Buffer,
    contentType: String,
  },
});

export default mongoose.model("Blog", blogSchema);
