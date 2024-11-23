import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}

export const findAllEnrollments = () => {
  return Database.enrollments;
};

export const findAllEnrollmentsForUser = (userId) => {
  return Database.enrollments.filter((e) => e.user === userId);
};

export const createEnrollment = (enrollment) => {
  const newEnrollment = { ...enrollment, _id: new Date().getTime().toString() };
  Database.enrollments.push(newEnrollment);
  return newEnrollment;
};

export const findEnrollmentById = (enrollmentId) => {
  return Database.enrollments.find((e) => e._id === enrollmentId);
};

export const findStudentsEnrolledInCourse = (courseId) => {
  const enrollments = Database.enrollments.filter((e) => e.course === courseId);
  const users = enrollments.map((enrollment) => {
    const user = Database.users.find((user) => user._id === enrollment.user);
    return { ...user, role: enrollment.role };
  });
  return users;
};

export const findCoursesEnrolledByStudent = (userId) => {
  const enrollments = Database.enrollments.filter((e) => e.user === userId);
  const courses = enrollments.map((enrollment) => {
    const course = Database.courses.find((course) => course._id === enrollment.course);
    return { ...course, role: enrollment.role };
  });
  return courses;
};

export const enrollStudentInCourse = (userId, courseId) => {
    console.log("enrollStudentInCourse", userId, courseId);
  const enrollment = {
    user: userId,
    course: courseId,
    role: "STUDENT",
    _id: new Date().getTime().toString(),
  };
  Database.enrollments.push(enrollment);
  return enrollment;
};

export const unenrollStudentFromCourse = (userId, courseId) => {
  Database.enrollments = Database.enrollments.filter(
    (e) => !(e.user === userId && e.course === courseId)
  );
  return { status: "OK" };
};
