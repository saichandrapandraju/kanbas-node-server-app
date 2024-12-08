import Database from "../Database/index.js";
import model from "./model.js";
export function findModulesForCourse(courseId) {
  console.log("findModulesForCourse", courseId);
  
  return model.find({ course: courseId });
}
export function createModule(module) {
  delete module._id
  return model.create(module);
} 
  export async function deleteModule(moduleId) {
    return model.deleteOne({ _id: moduleId });
  }
   export function updateModule(moduleId, moduleUpdates) {
    return model.updateOne({ _id: moduleId }, moduleUpdates);
 
  }
  