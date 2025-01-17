const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Accessing nested properties without checking for their existence
  const name = data.user.name; // Error if user or name is undefined
  console.log(name);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));