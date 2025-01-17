const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Check if nested properties exist before accessing them
  const name = data && data.user && data.user.name ? data.user.name : 'Guest';
  console.log(name);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));