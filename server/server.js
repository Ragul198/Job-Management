const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Job = require('./models/job');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (replace <connection_string> with your actual mongo uri)
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
  res.send('Job Management API');
});
// Get all jobs
app.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new job
// Add new job
app.post('/jobs', async (req, res) => {
  try {
    const {
      jobTitle,
      companyName,
      location,
      jobType,
      minSalary,
      maxSalary,
      applicationDeadline,
      jobDescription
    } = req.body;

    const descriptionText = jobDescription || "No description provided";

    // Split into words
    const words = descriptionText.split(' ');
    let firstLine = '';
    let secondLine = '';

    for (const word of words) {
      if ((firstLine + ' ' + word).trim().length <= 75) {
        firstLine = (firstLine + ' ' + word).trim();
      } else if ((secondLine + ' ' + word).trim().length <= 75) {
        secondLine = (secondLine + ' ' + word).trim();
      } else {
        break; // ignore extra words beyond 2 lines
      }
    }

    const job = new Job({
      jobTitle,
      companyName,
      location,
      jobtype: jobType || "Full Time",
      salary: maxSalary || 0,
      details: [firstLine, secondLine].filter(line => line),
      postedTime: 'Just Now',
      workmode: location === 'Remote' ? 'Remote' : 'Onsite',
    });

    await job.save();
    res.status(201).json(job);
  } catch (err) {
    console.error("Error creating job:", err);
    res.status(400).json({ error: err.message });
  }
});







const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
