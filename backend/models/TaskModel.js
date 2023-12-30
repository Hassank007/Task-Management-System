import mongoose from "mongoose";

const TaskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,

      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", TaskSchema);
