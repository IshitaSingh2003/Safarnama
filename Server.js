const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
  const { fromCity, toCity, modeWithinCity, modeToDestination, stayDays, purpose, interests, foodChoices, guide, guideContact } = req.body;

  // Spawn a child process to execute the backend script
  const pythonScript = spawn('python', ['Backend.py', fromCity, toCity, modeWithinCity, modeToDestination, stayDays, purpose, interests, foodChoices, guide, guideContact]);

  // Handle script output
  pythonScript.stdout.on('data', (data) => {
    const result = data.toString().trim();
    // Do something with the result, such as sending it back to the frontend
    res.send(result);
  });

  // Handle script errors
  pythonScript.stderr.on('data', (data) => {
    console.error(data.toString());
    res.status(500).send('An error occurred while processing the form.');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
