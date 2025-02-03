const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId) || userId < 0 || userId >= users.length) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users[userId];
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});