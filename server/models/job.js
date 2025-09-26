const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  companyLogo: { type: String },
  location: { type: String, required: true },
  jobtype: { type: String, required: true },
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  experience: { type: String },
  workmode: { type: String, default: "Onsite" },
  salary: { type: Number, required: true },
  details: { type: [String], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
