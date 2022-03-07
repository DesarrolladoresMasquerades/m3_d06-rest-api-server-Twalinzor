const express = require("express");
const router = express.Router();

router.get('/:projectId', (req, res)=>{
  Project.findById(req.params.projectId)
    .populate('tasks')
    .then((project)=>res.json(project))
    .catch(error=>res.json(error))
});

router.put('/:projectId',(req, res)=>{
  Project.findByIdAndUpdate(req.params.projectId, req.body, {new: true})
    .then((updatedProject)=>res.json(updatedProject))
    .catch(error=>res.json(error))
});

router.delete('/:projectId', (req, res)=>{
  Project.findByIdAndDelete(req.params.projectId)
    .then((deletedProject)=>{
      res.json(deletedProject)
    })
    .catch(error=>res.json(error))
});

router.get("/", (req, res)=>{
  Project.find()
  .populate('tasks')
  .then((projects) => res.json(projects))
  .catch(error=>res.json(error))
});

router.post("/", (req, res)=>{
  Project.create(req.body)
  .then(newProject=>res.json(newProject))
  .catch(error=>res.json(error))
});

module.exports = router;