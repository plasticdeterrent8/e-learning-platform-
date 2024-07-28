const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/quizzes', require('./routes/quizzes'));
app.use('/api/assignments', require('./routes/assignments'));
app.use('/api/sessions', require('./routes/liveSessions'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));