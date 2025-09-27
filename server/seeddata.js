const mongoose = require('mongoose');
const Job = require('./models/job'); // Adjust path to your job model file
require('dotenv').config();

const jobs = [
  {
    companyLogo: "Tesla",
    location: "Mumbai",
    jobtype: "Part Time",
    companyName: "Tesla",
    jobTitle: "Frontend Engineer",
    experience: "2-4 yr Exp",
    workmode: "Remote",
    salary: 1000000,
    details: [
      "Build dynamic UIs using React and Redux",
      "Ensure responsiveness across devices"
    ]
  },
  {
    companyLogo: "Swiggy",
    location: "Bangalore",
    jobtype: "Contract",
    companyName: "Swiggy",
    jobTitle: "Backend Developer",
    experience: "3-5 yr Exp",
    workmode: "Onsite",
    salary: 1400000,
    details: [
      "Develop RESTful APIs with Node.js and Express",
      "Optimize database queries for performance"
    ]
  },
  {
    companyLogo: "Amazon",
    location: "Delhi",
    jobtype: "Full Time",
    companyName: "Amazon",
    jobTitle: "Data Analyst",
    experience: "1-2 yr Exp",
    workmode: "Hybrid",
    salary: 800000,
    details: [
      "Analyze datasets and generate insights",
      "Create dashboards using Power BI"
    ]
  },
  {
    companyLogo: "Tesla",
    location: "Pune",
    jobtype: "Internship",
    companyName: "Tesla",
    jobTitle: "DevOps Engineer Intern",
    experience: "0-1 yr Exp",
    workmode: "Onsite",
    salary: 400000,
    details: [
      "Assist in CI/CD pipeline creation",
      "Monitor system health and alerts"
    ]
  },
  {
    companyLogo: "Swiggy",
    location: "Hyderabad",
    jobtype: "Full Time",
    companyName: "Swiggy",
    jobTitle: "UI/UX Researcher",
    experience: "2-3 yr Exp",
    workmode: "Remote",
    salary: 1100000,
    details: [
      "Conduct user interviews and surveys",
      "Translate findings into design improvements"
    ]
  },
  {
    companyLogo: "Amazon",
    location: "Chennai",
    jobtype: "Contract",
    companyName: "Amazon",
    jobTitle: "Mobile App Developer",
    experience: "3-6 yr Exp",
    workmode: "Hybrid",
    salary: 1600000,
    details: [
      "Develop iOS and Android apps with React Native",
      "Collaborate on UI/UX with designers"
    ]
  },
  {
    companyLogo: "Tesla",
    location: "Kolkata",
    jobtype: "Full Time",
    companyName: "Tesla",
    jobTitle: "Machine Learning Engineer",
    experience: "4-6 yr Exp",
    workmode: "Onsite",
    salary: 1800000,
    details: [
      "Build and deploy ML models",
      "Optimize algorithms for scalability"
    ]
  },
  {
    companyLogo: "Swiggy",
    location: "Ahmedabad",
    jobtype: "Part Time",
    companyName: "Swiggy",
    jobTitle: "QA Automation Engineer",
    experience: "2-4 yr Exp",
    workmode: "Remote",
    salary: 900000,
    details: [
      "Create automated test scripts",
      "Maintain test frameworks"
    ]
  },
  {
    companyLogo: "Amazon",
    location: "Jaipur",
    jobtype: "Internship",
    companyName: "Amazon",
    jobTitle: "Cloud Support Intern",
    experience: "0-1 yr Exp",
    workmode: "Hybrid",
    salary: 500000,
    details: [
      "Support AWS deployments",
      "Assist with cloud infrastructure monitoring"
    ]
  },
  {
    companyLogo: "Tesla",
    location: "Chennai",
    jobtype: "Full Time",
    companyName: "Tesla",
    jobTitle: "Product Manager",
    experience: "5-7 yr Exp",
    workmode: "Onsite",
    salary: 2000000,
    details: [
      "Define product roadmaps and strategy",
      "Coordinate with engineering and design teams"
    ]
  }
];

async function seedJobs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');

    // Clean existing jobs
    await Job.deleteMany({});
    console.log('Existing jobs deleted');

    // Insert seed data
    await Job.insertMany(jobs);
    console.log('Seed data inserted successfully');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding jobs:', error);
  }
}

seedJobs();
