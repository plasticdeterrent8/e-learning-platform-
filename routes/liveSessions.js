const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const LiveSession = require('../models/LiveSession');

// @route    POST api/sessions
// @desc     Create a live session
// @access   Private
router.post('/', auth, async (req, res) => {
  const { title, date, course } = req.body;

  try {
    const newSession = new LiveSession({
      title,
      date,
      course,
      instructor: req.user.id,
    });

    const session = await newSession.save();
    res.json(session);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/sessions/:courseId
// @desc     Get all live sessions for a course
// @access   Private
router.get('/:courseId', auth, async (req, res) => {
  try {
    const sessions = await LiveSession.find({ course: req.params.courseId }).populate('instructor', ['name']);
    res.json(sessions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;

