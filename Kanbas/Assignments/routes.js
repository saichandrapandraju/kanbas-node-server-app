import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Get all assignments for a course
  app.get("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  });

  // Get specific assignment
  app.get("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const assignment = await dao.findAssignmentById(aid);
    res.json(assignment);
  });

  // Create new assignment
  app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignment = { ...req.body, course: cid };
    const newAssignment = await dao.createAssignment(assignment);
    res.json(newAssignment);
  });

  // Update assignment
  app.put("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await dao.updateAssignment(aid, req.body);
    res.json(status);
  });

  // Delete assignment
  app.delete("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await dao.deleteAssignment(aid);
    res.json(status);
  });
}
