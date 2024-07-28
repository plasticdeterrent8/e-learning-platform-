import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = ({ history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/courses', { title, description }, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      history.push('/courses');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="create-course-container">
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Course Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCourse;