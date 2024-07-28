import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LiveSessions = ({ match }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const res = await axios.get(`/api/sessions/${match.params.courseId}`, {
          headers: { 'x-auth-token': localStorage.getItem('token') },
        });
        setSessions(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchSessions();
  }, [match.params.courseId]);

  return (
    <div className="live-sessions-container">
      <h1>Live Sessions</h1>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>
            {session.title} - {session.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveSessions;