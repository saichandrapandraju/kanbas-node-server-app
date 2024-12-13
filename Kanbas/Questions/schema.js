import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    questionType: String,
    description: String,
    points: Number,
    correctAnswer: String,
    possibleAnswers: [
      {
        text: String,
        isCorrect: Boolean,
      },
    ],
    quiz: { type: mongoose.Schema.Types.Mixed, ref: "QuizModel" },
  },
  { collection: "questions" }
);

export default schema;
