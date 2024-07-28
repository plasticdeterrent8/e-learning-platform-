import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Assignments = ({ match }) => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await axios.get(`/api/assignments/${match.params.courseId}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setAssignments(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchAssignments();
  }, [match.params.courseId]);

  return (
    <div className="assignments-container">
      <h1>Assignments</h1>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment._id}>
            <Link to={`/assignments/${assignment._id}`}>{assignment.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;

