const express = require('express');
const app = express();
const port = 3000;

const users = [];

app.use(express.json());

app.post('/add-user', (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    res.json(users);
})

app.get('/', (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
