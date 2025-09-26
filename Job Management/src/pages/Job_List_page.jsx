import React from "react";
import { useState } from "react";

import { Country, State, City } from "country-state-city";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import Icon from "@mdi/react";
import { mdiAccountVoice } from "@mdi/js";
import amazon from "../assets/amazon.png";
import tesla from "../assets/tesla.png";
import swiggy from "../assets/swiggy.png";
import { MdPersonOutline, MdBusiness, MdLayers } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useMemo } from "react";

const Job_List_page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [minValue, setMinValue] = useState(400000);
  const [maxValue, setMaxValue] = useState(2000000);
  console.log(minValue, maxValue, locationFilter, jobTypeFilter, searchTerm);
  const min = 200000;
  const max = 3000000;

  function formatSalaryValue(value) {
    if (value < 1000) {
      // Below thousand: show raw number
      return `${value}`;
    } else if (value < 100000) {
      // Thousands: divide by 1000, show as 'xK' or 'x.xK'
      const thousands = value / 1000;
      const formatted =
        thousands % 1 === 0
          ? thousands.toFixed(0)
          : thousands.toFixed(1).replace(/\.0$/, "");
      return `${formatted}K`;
    } else {
      // Lakhs and above: divide by 100000, show as 'xLPA' or 'x.xLPA'
      const lakhs = value / 100000;
      const formatted =
        lakhs % 1 === 0
          ? lakhs.toFixed(0)
          : lakhs.toFixed(1).replace(/\.0$/, "");
      return `${formatted}LPA`;
    }
  }

  // Dummy Jobs Data
  const jobs = [
    {
      id: 1,
      companyLogo: tesla,
      location: "Mumbai",
      jobtype: "Part Time",
      companyName: "Tesla",
      postedTime: "3h Ago",
      jobTitle: "Frontend Engineer",
      experience: "2-4 yr Exp",
      workmode: "Remote",
      salary: 1000000,
      details: [
        "Build dynamic UIs using React and Redux",
        "Ensure responsiveness across devices",
      ],
    },
    {
      id: 2,
      companyLogo: swiggy,
      location: "Bangalore",
      jobtype: "Contract",
      companyName: "Swiggy",
      postedTime: "1d Ago",
      jobTitle: "Backend Developer",
      experience: "3-5 yr Exp",
      workmode: "Onsite",
      salary: 1400000,
      details: [
        "Develop RESTful APIs with Node.js and Express",
        "Optimize database queries for performance",
      ],
    },
    {
      id: 3,
      companyLogo: amazon,
      location: "Delhi",
      jobtype: "Full Time",
      companyName: "Amazon",
      postedTime: "2d Ago",
      jobTitle: "Data Analyst",
      experience: "1-2 yr Exp",
      workmode: "Hybrid",
      salary: 800000,
      details: [
        "Analyze datasets and generate insights",
        "Create dashboards using Power BI",
      ],
    },
    {
      id: 4,
      companyLogo: tesla,
      location: "Pune",
      jobtype: "Internship",
      companyName: "Tesla",
      postedTime: "12h Ago",
      jobTitle: "DevOps Engineer Intern",
      experience: "0-1 yr Exp",
      workmode: "Onsite",
      salary: 400000,
      details: [
        "Assist in CI/CD pipeline creation",
        "Monitor system health and alerts",
      ],
    },
    {
      id: 5,
      companyLogo: swiggy,
      location: "Hyderabad",
      jobtype: "Full Time",
      companyName: "Swiggy",
      postedTime: "5h Ago",
      jobTitle: "UI/UX Researcher",
      experience: "2-3 yr Exp",
      workmode: "Remote",
      salary: 1100000,
      details: [
        "Conduct user interviews and surveys",
        "Translate findings into design improvements",
      ],
    },
    {
      id: 6,
      companyLogo: amazon,
      location: "Chennai",
      jobtype: "Contract",
      companyName: "Amazon",
      postedTime: "4d Ago",
      jobTitle: "Mobile App Developer",
      experience: "3-6 yr Exp",
      workmode: "Hybrid",
      salary: 1600000,
      details: [
        "Develop iOS and Android apps with React Native",
        "Collaborate on UI/UX with designers",
      ],
    },
    {
      id: 7,
      companyLogo: tesla,
      location: "Kolkata",
      jobtype: "Full Time",
      companyName: "Tesla",
      postedTime: "2h Ago",
      jobTitle: "Machine Learning Engineer",
      experience: "4-6 yr Exp",
      workmode: "Onsite",
      salary: 1800000,
      details: [
        "Build and deploy ML models",
        "Optimize algorithms for scalability",
      ],
    },
    {
      id: 8,
      companyLogo: swiggy,
      location: "Ahmedabad",
      jobtype: "Part Time",
      companyName: "Swiggy",
      postedTime: "8h Ago",
      jobTitle: "QA Automation Engineer",
      experience: "2-4 yr Exp",
      workmode: "Remote",
      salary: 900000,
      details: ["Create automated test scripts", "Maintain test frameworks"],
    },
    {
      id: 9,
      companyLogo: amazon,
      location: "Jaipur",
      jobtype: "Internship",
      companyName: "Amazon",
      postedTime: "6h Ago",
      jobTitle: "Cloud Support Intern",
      experience: "0-1 yr Exp",
      workmode: "Hybrid",
      salary: 500000,
      details: [
        "Support AWS deployments",
        "Assist with cloud infrastructure monitoring",
      ],
    },
    {
      id: 10,
      companyLogo: tesla,
      location: "Chennai",
      jobtype: "Full Time",
      companyName: "Tesla",
      postedTime: "3d Ago",
      jobTitle: "Product Manager",
      experience: "5-7 yr Exp",
      workmode: "Onsite",
      salary: 2000000,
      details: [
        "Define product roadmaps and strategy",
        "Coordinate with engineering and design teams",
      ],
    },
  ];

  const formatSalary = (value) => {
    if (value >= 100000) {
      return `₹${(value / 100000).toFixed(0)}L`;
    } else {
      return `₹${(value / 1000).toFixed(0)}k`;
    }
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1000);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1000);
    setMaxValue(value);
  };

  const getLeftPercentage = () => ((minValue - min) / (max - min)) * 100;
  const getWidthPercentage = () => ((maxValue - minValue) / (max - min)) * 100;

  // Filtered jobs list
  const filteredJobs = useMemo(() => {
    const result = jobs.filter((job) => {
      const matchesSearch =
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLocation =
        !locationFilter ||
        job.location.toLowerCase().includes(locationFilter.toLowerCase());

      const matchesJobType = !jobTypeFilter || job.jobtype === jobTypeFilter;

      const matchesSalary = job.salary >= minValue && job.salary <= maxValue;

      return (
        matchesSearch && matchesLocation && matchesJobType && matchesSalary
      );
    });
    console.log("Filtered jobs:", result);
    return result;
  }, [jobs, searchTerm, locationFilter, jobTypeFilter, minValue, maxValue]);

  console.log(filteredJobs);
  return (
    <div className="job_list_page">
      {/* Filter Section */}
      {/* Filter Section */}
      <div className="filter grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 sm:px-6 lg:px-8 py-4   shadow-md gap-4">
        {/* Search */}
        <div className="search flex items-center gap-2 sm:gap-4 border-r-2 sm:border-r-2 px-3 sm:px-4 py-2 rounded-md sm:rounded-none  border-gray-300">
          <IoIosSearch className="text-gray-400 w-6 h-6 sm:w-8 sm:h-8" />
          <input
            className="flex-1 text-sm sm:text-lg outline-none"
            type="text"
            placeholder="Search By Job Title, Role"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Location */}
        <div className="location flex items-center gap-2 sm:gap-4 border-r-2 sm:border-r-2 px-3 sm:px-4 py-2 rounded-md sm:rounded-none border-gray-300">
          <CiLocationOn className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
          <input
            className="flex-1 text-sm sm:text-lg outline-none"
            type="text"
            placeholder="Location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <RiArrowDropDownLine className="w-5 h-5 sm:w-7 sm:h-7 text-gray-500" />
        </div>

        {/* Job Type */}
        <div className="jobtype flex items-center gap-2 sm:gap-4 border-r-2 sm:border-r-2 px-3 sm:px-4 py-2 rounded-md sm:rounded-none border-gray-300">
          <Icon path={mdiAccountVoice} size={1} className="text-gray-400" />
          <select
            name="jobtype"
            className="flex-1 text-sm sm:text-lg outline-none text-gray-500"
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
          >
            <option value="">Job Type</option>
            <option value="Internship">Internship</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* Salary Slider */}
        <div className="w-full px-3 py-2">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm sm:text-base font-medium text-gray-800 m-0">
              Salary Per Month
            </h3>
            <span className="text-sm sm:text-base font-semibold text-gray-800">
              {formatSalary(minValue)} - {formatSalary(maxValue)}
            </span>
          </div>

          <div className="relative h-6">
            {/* Track Background */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-300 rounded-full">
              <div
                className="absolute h-full bg-gray-800 rounded-full"
                style={{
                  left: `${getLeftPercentage()}%`,
                  width: `${getWidthPercentage()}%`,
                }}
              />
            </div>

            {/* Min & Max Inputs */}
            <input
              type="range"
              min={min}
              max={max}
              value={minValue}
              onChange={handleMinChange}
              className="absolute w-full h-6 appearance-none pointer-events-none range-input-min"
            />
            <input
              type="range"
              min={min}
              max={max}
              value={maxValue}
              onChange={handleMaxChange}
              className="absolute w-full h-6 appearance-none pointer-events-none range-input-max"
            />
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="jobs py-6 px-4 sm:px-6 bg-gray-100 min-h-screen">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
    {filteredJobs.map((job) => (
      <div
        key={job.id}
        className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between p-4 sm:p-6 hover:shadow-md transition-shadow duration-200 h-auto sm:h-[360px]"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="p-2 bg-gradient-to-b from-[#FEFEFD] to-[#F1F1F1] rounded-2xl shadow-md">
            <img
              src={job.companyLogo}
              className="w-12 h-12 sm:w-[66px] sm:h-[66px] bg-white rounded-full p-1"
              alt={job.companyName}
            />
          </div>
          <span className="bg-[#B0D9FF] text-black px-2 sm:px-[10px] py-1 sm:py-[7px] rounded-[10px] text-xs sm:text-sm font-medium">
            {job.postedTime}
          </span>
        </div>

        {/* Job Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
          {job.jobTitle}
        </h3>

        {/* Job Details */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-medium mb-3 sm:mb-4 text-sm sm:text-[16px] text-gray-600">
          <span className="flex items-center gap-1">
            <MdPersonOutline size={20} sm={22} />
            {job.experience}
          </span>
          <span className="flex items-center gap-1">
            <MdBusiness size={20} sm={22} />
            {job.workmode}
          </span>
          <span className="flex items-center gap-1">
            <MdLayers size={20} sm={22} />
            {formatSalaryValue(job.salary)}
          </span>
        </div>

        {/* Description */}
        <div className="mb-4 sm:mb-6">
          <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
            {job.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <button className="w-full bg-[#00AAFF] hover:from-blue-600 hover:to-blue-700 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base">
          Apply Now
        </button>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Job_List_page;
