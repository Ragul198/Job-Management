const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  id: Number,
  companyLogo: String,
  location: String,
  jobtype: String,
  companyName: String,
  postedTime: String,
  jobTitle: String,
  experience: String,
  workmode: String,
  salary: Number,
  details: [String],
});

module.exports = mongoose.model('Job', jobSchema);
