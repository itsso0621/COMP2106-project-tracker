const mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Course", courseSchema);
