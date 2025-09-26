// pages/CreateJobModal.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import axios from "axios";

const CreateJobModal = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/jobs`, {
        jobTitle: data.jobTitle,
        companyName: data.companyName,
        location: data.location,
        jobType: data.jobType,
        minSalary: parseInt(data.minSalary),
        maxSalary: parseInt(data.maxSalary),
        applicationDeadline: data.applicationDeadline,
        jobDescription: data.jobDescription,
      });

      console.log("Job created successfully:", response.data);
      setSubmitMessage("Job created successfully!");
      reset();


      // Close modal after 2 seconds
      setTimeout(() => {
  navigate("/", { state: { refresh: true } });

}, 1000);

    } catch (error) {
      console.error(
        "Error creating job:",
        error.response?.data || error.message
      );
      setSubmitMessage("Error creating job. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveDraft = () => {
    const form = document.querySelector("form");
    const formData = new FormData(form);
    console.log("Draft Data:", Object.fromEntries(formData));
    setSubmitMessage("Draft saved locally!");

    // Clear message after 3 seconds
    setTimeout(() => {
      setSubmitMessage("");
    }, 3000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-screen overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Create Job Opening
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Success/Error Message */}
        {submitMessage && (
          <div
            className={`mx-6 mt-4 p-3 rounded-lg ${
              submitMessage.includes("Error")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {submitMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          {/* Row 1: Job Title & Company Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title
              </label>
              <input
                type="text"
                {...register("jobTitle", { required: "Job title is required" })}
                placeholder="Full Stack Developer"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                {...register("companyName", {
                  required: "Company name is required",
                })}
                placeholder="Amazon, Microsoft, Swiggy"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              {errors.companyName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.companyName.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Location & Job Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <select
                  {...register("location", {
                    required: "Location is required",
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none outline-none bg-white"
                >
                  <option value="">Choose Preferred Location</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <div className="relative">
                <select
                  {...register("jobType", { required: "Job type is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none outline-none bg-white"
                >
                  <option value="">Choose Job Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
                <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.jobType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.jobType.message}
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Salary Range & Application Deadline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salary Range
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    {...register("minSalary", {
                      required: "Minimum salary is required",
                      min: { value: 0, message: "Salary must be positive" },
                    })}
                    placeholder="500000"
                    className="w-full pl-6 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    ₹
                  </span>
                  <input
                    type="number"
                    {...register("maxSalary", {
                      required: "Maximum salary is required",
                      min: { value: 0, message: "Salary must be positive" },
                    })}
                    placeholder="1200000"
                    className="w-full pl-6 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
              {(errors.minSalary || errors.maxSalary) && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.minSalary?.message ||
                    errors.maxSalary?.message ||
                    "Both salary fields are required"}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application Deadline
              </label>
              <div className="relative">
                <input
                  type="date"
                  {...register("applicationDeadline", {
                    required: "Application deadline is required",
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <CalendarIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.applicationDeadline && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.applicationDeadline.message}
                </p>
              )}
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <textarea
              {...register("jobDescription", {
                required: "Job description is required",
                maxLength: {
                  value: 150,
                  message: "Max 2 lines of 75 characters each",
                }, // total 150 chars
              })}
              placeholder="Please share a description to let the candidate know more about the job role"
              rows={6} // keeps it visually big
              onChange={(e) => {
                const lines = e.target.value.split("\n").slice(0, 2); // max 2 lines
                const limitedLines = lines.map((line) => line.slice(0, 75)); // max 75 chars per line
                e.target.value = limitedLines.join("\n");
              }}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none outline-none text-base"
            />

            {errors.jobDescription && (
              <p className="text-red-500 text-xs mt-1">
                {errors.jobDescription.message}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col lg:justify-between sm:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              onClick={handleSaveDraft}
              disabled={isSubmitting}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium flex items-center justify-center disabled:opacity-50"
            >
              <span className="flex justify-center items-center gap-2">
                Save Draft <RiArrowDownDoubleLine />
              </span>
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium flex items-center justify-center disabled:opacity-50"
            >
              <span className="flex justify-center items-center gap-2">
                {isSubmitting ? "Publishing..." : "Publish"}{" "}
                <RiArrowRightDoubleLine />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobModal;
