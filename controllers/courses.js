const express = require("express");
const router = express.Router();

const Course = require("../models/course");

const passport = require("passport");

// auth check for access control to create/edit/delete methods
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    // user is already authenticated
    return next(); // do the next thing in the request i.e. continue with the calling function
  }

  res.redirect("/login"); // anonymous user tried to access a private method => go to login
}

// GET /courses/add
router.get("/add", isLoggedIn, (req, res, next) => {
  res.render("courses/add", {
    title: "Add a course",
    user: req.user,
  });
});

// POST /courses/add
router.post("/add", isLoggedIn, (req, res, next) => {
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
