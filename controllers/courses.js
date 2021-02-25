const express = require("express");
const router = express.Router();

const Course = require("../models/course");

router.get("/add", (req, res, next) => {
  res.render("courses/add", { title: "Add a course" });
});

// POST /courses/add
router.post("/add", (req, res, next) => {
  // use the Project model to save the form data to MongoDB
  Course.create(
    {
      courseCode: req.body.courseCode,
    },
    (err, addCourse) => {
      if (err) {
        console.log(err);
      } else {
        // if successful, redirect to projects index
        res.redirect("/");
      }
    }
  );
});

//make public
module.exports = router;
