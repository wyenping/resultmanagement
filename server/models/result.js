const mongoose = require('mongoose') //Import Mongoose software module

//Schema = mongoose.Schema, //Create a Mongoose Schema object for generating document rules as to what structure MUST be expected when requesting/sending data to and from the MongoDB database collection

var CourseSchema = new mongoose.Schema({
    Course_Name: String,
    Code: String,
    Section: String,
    Student: [{
        StudentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Student'
        },
        MarkId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Mark'
        }
      }]
    });

var StudentSchema = new mongoose.Schema({
    Name: String,
    MatricsNo: String
})
/*Define schema*/
var MarkSchema = new mongoose.Schema({
    Assignment: {type : Number},
    Quiz: {type :Number},
    MidTerm: {type: Number},
    Project: {type:Number},
    Presentation: {type: Number},
    Final: {type: Number}

})

module.exports = {
Course: mongoose.model('Course', CourseSchema, 'Course'),
Student: mongoose.model('Student', StudentSchema, 'Student'),
Mark: mongoose.model('Mark', MarkSchema, 'Mark'),
};

