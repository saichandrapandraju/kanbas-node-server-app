import model from "./model.js";
export async function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}
export function createQuiz(quiz) {
  delete quiz._id;
  quiz = {
    ...quiz,
    points: 20,
    quizType: "Graded Quiz",
    published: false,
    assignmentGroup: "Quizzes",
    shuffleAnswers: true,
    timeLimit: 20,
    multipleAttempts: false,
    numAttempts: 1,
    // showCorrectAnswers: "Immideately",
    showCorrectAnswers: true,
    acessCode: "",
    oneQuestionAtATime: true,
    webcamRequired: false,
    lockQuestionsAfterAnswering: false,
  };
  return model.create(quiz);
}
export function deleteQuiz(quizId) {
  return model.deleteOne({ _id: quizId });
}
export function updateQuiz(quizId, quizUpdates) {
  return model.updateOne({ _id: quizId }, quizUpdates);
}
export function findQuizById(quizId) {
  return model.findById(quizId);
}
