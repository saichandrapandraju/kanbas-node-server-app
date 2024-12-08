import Database from "../Database/index.js";
import model from "./model.js";
import { v4 as uuidv4 } from 'uuid';

import enrollmentsModel from "../Enrollments/model.js";
export function findAllCourses() {
 return model.find();
}


export async function findCoursesForEnrolledUser(userId) {
  const courses = await model.find(); // Added await for async database query
  const enrollments = await enrollmentsModel.find({ user: userId }).populate("course");
  
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => 
      enrollment.course._id.toString() === course._id.toString() // Proper comparison of ObjectIds
    )
  );
  return enrolledCourses;
}

export function createCourse(course) {
  delete course._id;
  course._id = uuidv4();
  return model.create(course);
}

export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
 }
 
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, { $set: courseUpdates });
  }
  