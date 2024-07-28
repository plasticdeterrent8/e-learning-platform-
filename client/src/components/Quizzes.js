import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Quizzes = ({ match }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await axios.get(`/api/quizzes/${match.params.courseId}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setQuizzes(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchQuizzes();
  }, [match.params.courseId]);

  return (
    <div className="quizzes-container">
      <h1>Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id}>
            <Link to={`/quizzes/${quiz._id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quizzes;

