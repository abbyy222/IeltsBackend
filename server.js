const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve the PDF file
app.get('/api/download-pdf', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'results.pdf');
  res.download(filePath, 'IELTS_Result.pdf');
});

// Login route
const user = {
  email: 'preciousabraham589@gmail.com',
  password: 'Jamb!2345',
  name: 'Oluwafemi'
};

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    return res.json({ success: true, name: user.name });
  }

  return res.status(401).json({ success: false, error: 'Invalid credentials' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
