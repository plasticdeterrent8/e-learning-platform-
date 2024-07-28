import React, { useState } from 'react';
import axios from 'axios';

const CreateQuiz = ({ history }) => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index] = event.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/quizzes', { title, questions }, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      history.push('/quizzes');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="create-quiz-container">
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quiz Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {questions.map((question, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Question ${index + 1}`}
            value={question}
            onChange={(e) => handleQuestionChange(index, e)}
          />
        ))}
        <button type="button" onClick={addQuestion}>Add Question</button>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateQuiz;