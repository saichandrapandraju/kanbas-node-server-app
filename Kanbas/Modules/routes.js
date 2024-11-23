import * as modulesDao from "./dao.js";

export default function ModuleRoutes(app) {
  app.put("/api/modules/:moduleId", async (req, res) => {
    try {
      const { moduleId } = req.params;
      const moduleUpdates = req.body;
      const status = await modulesDao.updateModule(moduleId, moduleUpdates);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.delete("/api/modules/:moduleId", async (req, res) => {
    try {
      const { moduleId } = req.params;
      const status = await modulesDao.deleteModule(moduleId);
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
}