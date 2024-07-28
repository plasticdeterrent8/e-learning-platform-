import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">E-Learning</Link>
      <div className="navbar-links">
        <Link to="/courses">Courses</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/assignments">Assignments</Link>
        <Link to="/sessions">Live Sessions</Link>
      </div>
    </nav>
  );
};

export default Navbar;

