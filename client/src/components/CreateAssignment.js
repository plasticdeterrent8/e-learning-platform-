import React, { useState } from 'react';
import axios from 'axios';

const CreateAssignment = ({ history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/assignments', { title, description }, {
        headers: { 'x-auth-token': localStorage.getItem('token') },
      });
      history.push('/assignments');
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="create-assignment-container">
      <h2>Create Assignment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Assignment Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Assignment Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateAssignment;