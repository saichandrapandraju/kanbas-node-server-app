import model from "./model.js";

export const createAssignment = (assignment) => {
  return model.create(assignment);
};

export const findAssignmentsForCourse = (courseId) => {
  return model.find({ course: courseId });
};

export const findAssignmentById = (assignmentId) => {
  return model.findById(assignmentId);
};

export const updateAssignment = (aid, assignment) => {
  return model.updateOne({ _id: aid }, { $set: assignment });
};

export const deleteAssignment = (aid) => {
  return model.deleteOne({ _id: aid });
};
