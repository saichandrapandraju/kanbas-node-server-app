import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: { type: String, required: true },
    course: { 
      type: mongoose.Schema.Types.Mixed, 
      ref: "CourseModel",
      required: true 
    },
    description: String,
    points: { type: Number, default: 100 },
    dueDate: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
    published: { type: Boolean, default: false }
  },
  { collection: "assignments" }
);

export default assignmentSchema;