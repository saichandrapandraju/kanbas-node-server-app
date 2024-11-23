import Database from "../Database/index.js";

export const createAssignment = (assignment) => {
  const newAssignment = { ...assignment, _id: new Date().getTime().toString() };
  Database.assignments.push(newAssignment);
  return newAssignment;
};

export const findAssignmentsForCourse = (courseId) => {
  const assignments = Database.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return assignments;
};

export const findAssignmentById = (assignmentId) => {
  const assignment = Database.assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  return assignment;
};

export const updateAssignment = (assignmentId, assignmentUpdates) => {
  Database.assignments = Database.assignments.map((assignment) =>
    assignment._id === assignmentId ? { ...assignment, ...assignmentUpdates } : assignment
  );
  return findAssignmentById(assignmentId);
};

export const deleteAssignment = (assignmentId) => {
  const status = Database.assignments = Database.assignments.filter(
    (assignment) => assignment._id !== assignmentId
  );
  return status;
};
