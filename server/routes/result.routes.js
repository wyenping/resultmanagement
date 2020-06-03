const express = require("express");
const resultCtrl = require("../controller/result.controller");
const router = express.Router();

router.get("/api/get_student/:id", resultCtrl.get_student);
router.get("/api/get_course", resultCtrl.get_course);
router.get("/api/get_marks", resultCtrl.get_marks);
router.get("/api/get_selectedmarks/:mark_id", resultCtrl.get_selectedmarks);
router.put("/api/update_mark/:mark_id", resultCtrl.update_mark);
//router.get("/api/get_course_id/:course_Id", resultCtrl.get_course_id);
//router.delete("/api/delete_marks")
module.exports = router;
