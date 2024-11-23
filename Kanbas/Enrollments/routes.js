import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  const findAllEnrollments = async (req, res) => {
    const enrollments = await dao.findAllEnrollments(req.params.userId);
    res.json(enrollments);
  };

  const findStudentsEnrolledInCourse = async (req, res) => {
    const { courseId } = req.params;
    const students = await dao.findStudentsEnrolledInCourse(courseId);
    res.json(students);
  };

  const findCoursesEnrolledByStudent = async (req, res) => {
    const { userId } = req.params;
    const courses = await dao.findCoursesEnrolledByStudent(userId);
    res.json(courses);
  };
  const findEnrollmentsForUser = async (req, res) => {
    const enrollments = await dao.findAllEnrollmentsForUser(req.params.userId);
    res.json(enrollments);
  };
  const enrollStudentInCourse = async (req, res) => {
    const enrollment = await dao.enrollStudentInCourse(
      req.params.userId,
      req.params.courseId
    );
    res.json(enrollment);
  };

  const unenrollStudentFromCourse = async (req, res) => {
    const status = await dao.unenrollStudentFromCourse(
      req.params.userId,
      req.params.courseId
    );
    res.json(status);
  };

  app.get("/api/users/:userId/enrollments", findEnrollmentsForUser);
  app.get("/api/courses/:courseId/students", findStudentsEnrolledInCourse);
  app.get("/api/users/:userId/courses", findCoursesEnrolledByStudent);
  app.post("/api/users/:userId/courses/:courseId/enroll", enrollStudentInCourse);
  app.delete("/api/users/:userId/courses/:courseId/enroll", unenrollStudentFromCourse);
}