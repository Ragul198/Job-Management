import React, { useState } from 'react';

const SalaryRangeSlider = () => {
  const [minValue, setMinValue] = useState(50000);
  const [maxValue, setMaxValue] = useState(80000);
  console.log(minValue,maxValue);
  const min = 20000;
  const max = 200000;
  
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

  return (
    <div className="w-full max-w-md p-5 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-base font-medium text-gray-800 m-0">
          Salary Per Month
        </h3>
        <span className="text-base font-semibold text-gray-800">
          {formatSalary(minValue)} - {formatSalary(maxValue)}
        </span>
      </div>
      
      {/* Slider Container */}
      <div className="relative h-6 mb-5">
        {/* Track Background */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-1.5 bg-gray-300 rounded-full">
          {/* Active Range */}
          <div 
            className="absolute h-full bg-gray-800 rounded-full"
            style={{
              left: `${getLeftPercentage()}%`,
              width: `${getWidthPercentage()}%`
            }}
          />
        </div>
        
        {/* Min Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="range-input range-input-min"
        />
        
        {/* Max Range Input */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="range-input range-input-max"
        />
        
        {/* Labels */}
        
      </div>
    </div>
  );
};

export default SalaryRangeSlider;
