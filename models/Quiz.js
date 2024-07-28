const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: String,
    },
  ],
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course',
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('quiz', QuizSchema);

