// require express and enable express routing
const express = require("express");
const router = express.Router();

// add project model for CRUD operations
const Project = require("../models/project");

/** GET /projects */
router.get("/", (req, res, next) => {
  Project.find((err, projects) => {
    if (err) {
      console.log(err);
    } else {
      // Load the index view, set the title, and pass the query resulttest as "projects"
      res.render("projects/index", {
        title: "My Projects",
        projects: projects,
      });
    }
  });
});

/** GET /projects/add */
router.get("/add", (req, res, next) => {
  res.render("projects/add", { title: "Project Details" });
});

/** POST /projects/add */
router.post("/add", (req, res, next) => {
  // use the Project model to save the form data to MongoDB
  Project.create(
    {
      name: req.body.name,
      dueDate: req.body.dueDate,
      course: req.body.course,
    },
    (err, newProject) => {
      if (err) {
        console.log(err);
      } else {
        // if successful, redirect to projects index
        res.redirect("/projects");
      }
    }
  );
});

//make public
module.exports = router;
