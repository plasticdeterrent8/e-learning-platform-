const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courses',
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [
        {
          type: String,
          required: true,
        },
      ],
      correctAnswer: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('quizzes', QuizSchema);