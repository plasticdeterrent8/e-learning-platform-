import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('/api/courses', {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setCourses(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="courses-container">
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <Link to={`/courses/${course._id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;