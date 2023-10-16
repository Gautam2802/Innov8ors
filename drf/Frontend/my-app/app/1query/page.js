"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [Counts, setCounts] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(''); // Selected country state

  useEffect(() => {
    // When the component mounts, fetch data from the API
    getCounts();
  }, []);

  const getCounts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/");
      const data = response.data.counts;
      setCounts(data);
    } catch (error) {
      console.error("ERROR fetching counts");
    }
  }

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value); // Update selected country state
  }

  return (
    <div>
      <h1>This is homepage</h1>
      <br />
      <label htmlFor="countrySelect">Select Country: </label>
      <select
        id="countrySelect"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">All</option>
        <option value="AUSTRALIA">Australia</option>
        <option value="CANADA">Canada</option>
        <option value="SINGAPORE">Singapore</option>
        <option value="UNITED STATES OF AMERICA">USA</option>
      </select>
      <div className='p-10'>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {Counts.map((count, i) => (
              // Filter results based on the selected country
              (selectedCountry === '' || selectedCountry === count.country) && (
                <tr key={i}>
                  <td>{count['country']}</td>
                  <td>{count.count}</td>
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