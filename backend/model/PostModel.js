import mongoose from "mongoose";

const PostSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
  },
  preview: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tag: {
    type: [String],
    required: true,
  },
  likes: {
    type: Number
  },
  dislikes: {
    type: Number
  }
}, {
  timestamps: true
});

export default mongoose.model('Post', PostSchema)