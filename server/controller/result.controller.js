const mongoose = require("mongoose"),
  fs = require("fs");
const { Course, Student, Mark } = require("../models/result");
const get_student = function (req, res, next) {
  var courseId = req.params.id;
  console.log("Get student data.", courseId);
  Course.findOne({ _id: courseId })
    .populate("Student.StudentId")
    .populate("Student.MarkId")
    .exec()
    .then((doc) => {
      if (doc) {
        // console.log(doc);
        res.status(200).json(doc);
      } else {
        res.status(200).json({ message: "Course not found" });
      }
    });
};

const get_course = function (req, res, next) {
  Course.find(function (err, result) {
    if (!result) {
      console.log(err);
    } else {
      //   console.log(result);
      for (i = 0; i < result[0].length; i++) {
        console.log(result[i].Code);
      }
    }
    return res.status(200).json({ course_list: result });
  });
};

const get_marks = function (req, res, next) {
  // var mark_id = req.param.markID;
  var mark_id = "5eae75cdef3fda16e0615fca";

  Mark.find({ _id: mark_id }).then((result) => {
    if (!result) {
      console.log(err);
    } else {
      return res.status(200).json({ mark_result: result });
    }
  });
};

const get_selectedmarks = function (req, res) {
  console.log("fetching student mark");
  const id = req.param.mark_id;
  Mark.findById({ _id: req.params.mark_id }, async (err, mark) => {
    if (err) res.status(404).json(err);
    res.status(200).json(mark);
  });
};

const update_mark = function (req, res) {
  console.log("Update here");
  console.log(req.body);
  console.log(req.body._id);

  const id = req.body._id._id;
  Mark.findById({ _id: id }, (err, recs) => {
    if (err) {
      console.dir(err);
    } else {
      recs.Assignment = req.body.Assignment || recs.Assignment;
      recs.Quiz = req.body.Quiz || recs.Quiz;
      recs.MidTerm = req.body.MidTerm || recs.MidTerm;
      recs.Project = req.body.Project || recs.Project;
      recs.Presentation = req.body.Presentation || recs.Presentation;
      recs.Final = req.body.Final || recs.Final;

      recs.save((err, recs) => {
        if (err) {
          res.status(500).send(err);
        }

        res.json({ records: recs });
      });
    }
  });
};

module.exports = {
  get_student,
  get_course,
  get_marks,
  get_selectedmarks,
  update_mark,
};
