import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import Quizzes from './components/Quizzes';
import CreateQuiz from './components/CreateQuiz';
import Assignments from './components/Assignments';
import CreateAssignment from './components/CreateAssignment';
import LiveSessions from './components/LiveSessions';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/create" component={CreateCourse} />
        <Route exact path="/quizzes/:courseId" component={Quizzes} />
        <Route exact path="/quizzes/create" component={CreateQuiz} />
        <Route exact path="/assignments/:courseId" component={Assignments} />
        <Route exact path="/assignments/create" component={CreateAssignment} />
        <Route exact path="/sessions/:courseId" component={LiveSessions} />
      </Switch>
    </Router>
  );
}

export default App;