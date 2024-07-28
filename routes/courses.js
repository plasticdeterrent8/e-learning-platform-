const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Course = require('../models/Course');

// @route    POST api/courses
// @desc     Create a course
// @access   Private
router.post('/', auth, async (req, res) => {
  const { title, description } = req.body;

  try {
    const newCourse = new Course({
      title,
      description,
      instructor: req.user.id,
    });

    const course = await newCourse.save();
    res.json(course);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/courses
// @desc     Get all courses
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', ['name']);
    res.json(courses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;