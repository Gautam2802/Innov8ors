"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [mean_salary_by_type, setmean_salary_by_type] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState(''); // Selected avg_salaryry state

  useEffect(() => {
    // When the component mounts, fetch data from the API
    getmean_salary_by_type();
  }, []);

  const getmean_salary_by_type = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/mean/");
      const data = response.data.mean_salary_by_type;
      setmean_salary_by_type(data);
    } catch (error) {
      console.error("ERROR fetching mean_salary_by_type");
    }
  }

  const handleSalaryTypeChange = (event) => {
    setSelectedSalary(event.target.value); // Update selected avg_salaryry state
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
              <th>Mean Salary</th>
            </tr>
          </thead>
          <tbody>
            {mean_salary_by_type.map((avg_salary, i) => (
              // Filter results based on the selected avg_salaryry
              (selectedSalary === '' || selectedSalary === avg_salary.salary_type) && (
                <tr key={i}>
                  <td>{avg_salary['salary_type']}</td>
                  <td>{avg_salary.avg_salary}</td>
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