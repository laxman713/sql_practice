const express = require('express');
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/",studentController.addEntries);
router.get("/",studentController.getStudents);
router.get("/:id",studentController.getStudentsByID);
router.put("/:id",studentController.updateEntry);
router.delete("/:id",studentController.deleteEntry);
module.exports = router;