"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [median_salary_by_type, setmedian_salary_by_type] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState(''); // Selected median_salaryry state

  useEffect(() => {
    // When the component mounts, fetch data from the API
    getmedian_salary_by_type();
  }, []);

  const getmedian_salary_by_type = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/median/");
      const data = response.data.median_salary_by_type;
      setmedian_salary_by_type(data);
    } catch (error) {
      console.error("ERROR fetching median_salary_by_type");
    }
  }

  const handleSalaryTypeChange = (event) => {
    setSelectedSalary(event.target.value); // Update selected median_salaryry state
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
              <th>Median Salary</th>
            </tr>
          </thead>
          <tbody>
            {median_salary_by_type.map((median_salary, i) => (
              // Filter results based on the selected median_salaryry
              (selectedSalary === '' || selectedSalary === median_salary.salary_type) && (
                <tr key={i}>
                  <td>{median_salary['salary_type']}</td>
                  <td>{median_salary.median_salary}</td>
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