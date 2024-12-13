import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    point: Number,
    dueDate: String,
    availableDate: String,
    course: { type: mongoose.Schema.Types.Mixed, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;
