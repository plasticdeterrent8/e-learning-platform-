const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Quiz = require('../models/Quiz');

// @route    POST api/quizzes
// @desc     Create a quiz
// @access   Private
router.post('/', auth, async (req, res) => {
  const { title, questions, course } = req.body;

  try {
    const newQuiz = new Quiz({
      title,
      questions,
      course,
      instructor: req.user.id,
    });

    const quiz = await newQuiz.save();
    res.json(quiz);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    GET api/quizzes/:courseId
// @desc     Get all quizzes for a course
// @access   Private
router.get('/:courseId', auth, async (req, res) => {
  try {
    const quizzes = await Quiz.find({ course: req.params.courseId }).populate('instructor', ['name']);
    res.json(quizzes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;