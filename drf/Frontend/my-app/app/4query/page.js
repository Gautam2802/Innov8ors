"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [percentile_salary_by_type, setpercentile_salary_by_type] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState(''); // Selected percentile_salaryry state

  useEffect(() => {
    // When the component mounts, fetch data from the API
    getpercentile_salary_by_type();
  }, []);

  const getpercentile_salary_by_type = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/low-percentile/");
      const data = response.data.percentile_salary_by_type;
      setpercentile_salary_by_type(data);
    } catch (error) {
      console.error("ERROR fetching percentile_salary_by_type");
    }
  }

  const handleSalaryTypeChange = (event) => {
    setSelectedSalary(event.target.value); // Update selected percentile_salaryry state
  }

  return (
    <div>
      
      <br />
      <label htmlFor="salaryTypeSelect">Select Salary type: </label>
      <select
        id="salaryTypeSelect"
        value={selectedSalary}
        onChange={handleSalaryTypeChange}
      >
        <option value="">All</option>
        <option value="Year">Year</option>
        <option value="Bi-Weekly">Bi-Weekly</option>
        <option value="Week">Week</option>
        <option value="Hour">Hour</option>
        <option value="Month">Month</option>
      </select>
      <div className='p-10 m-4'>
        <table>
          <thead>
            <tr>
              <th>Salary Type</th>
              <th>25th Percentile Salary</th>
            </tr>
          </thead>
          <tbody>
            {percentile_salary_by_type.map((percentile_salary, i) => (
              // Filter results based on the selected percentile_salaryry
              (selectedSalary === '' || selectedSalary === percentile_salary.salary_type) && (
                <tr key={i}>
                  <td>{percentile_salary['salary_type']}</td>
                  <td>{percentile_salary.percentile_salary}</td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;