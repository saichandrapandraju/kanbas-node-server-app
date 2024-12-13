import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    answers: [
      {
        question: {
          type: mongoose.Schema.Types.Mixed,
          ref: "QuestionModel",
        },
        selectedAnswer: String,
        isCorrect: Boolean,
      },
    ],
    score: Number,
    submittedAt: { type: Date, default: Date.now },
    attempts: Number,

    quiz: { type: mongoose.Schema.Types.Mixed, ref: "QuizModel" },
    user: { type: mongoose.Schema.Types.Mixed, ref: "UserModel" },
  },
  { collection: "submissions" }
);

export default schema;
