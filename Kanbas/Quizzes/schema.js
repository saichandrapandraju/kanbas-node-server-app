import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    // _id: String,
    title: String,
    description: String,
    quizType: String,
    points: Number,
    published: Boolean,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Number,
    multipleAttempts: Boolean,
    numAttempts: Number,
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: Boolean,
    webcamRequired: Boolean,
    howManyQuestions: Number,
    lockQuestionsAfterAnswering: Boolean,
    dueDate: String,
    availableDate: String,
    untilDate: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
  },
  { collection: "quizzes" }
);

export default schema;
