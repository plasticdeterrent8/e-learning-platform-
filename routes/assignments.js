const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Assignment = require('../models/Assignment');

// @route    POST api/assignments
// @desc     Create an assignment
// @access   Private
router.post('/', auth, async (req, res) => {
  const { title, description, course } = req.body;

  try {
    const newAssignment = new Assignment({
      title,
      description,
      course,
      instructor: req.user.id,
    });

    const assignment = await newAssignment.save();
    res.json(assignment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/assignments/:courseId
// @desc     Get all assignments for a course
// @access   Private
router.get('/:courseId', auth, async (req, res) => {
  try {
    const assignments = await Assignment.find{ course: req.params.courseId }).populate('instructor', ['name']);
    res.json(assignments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;