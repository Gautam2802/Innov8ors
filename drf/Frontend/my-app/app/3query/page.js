"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Query3UI = () => {
  const [column1, setColumn1] = useState("");
  const [column2, setColumn2] = useState("");
  const [column3, setColumn3] = useState("");
  const [result, setResult] = useState(null);

  const performQuery = () => {
    // Make an API request to your Django backend

    // Example: Fetch API
    fetch(
      `/api/query3?column1=${column1}&column2=${column2}&column3=${column3}`
    )
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <h1 className="text-2xl text-gray-800 my-5 m-6 ">
        Query 3- Median salary: Calculate the median salary of H1B applicants.
      </h1>

      <label htmlFor="column1" className="m-6">
        Select Column 1:On the basis of{" "}
      </label>
      <select
        id="column1"
        onChange={(e) => setColumn1(e.target.value)}
        className="w-5/6 p-2 m-6 border border-gray-300 rounded"
      >
        {/* Options will be populated dynamically */}
      </select>
      <br />
      <label htmlFor="column2" className="m-6">
        Select Column 2: On the basis of{" "}
      </label>
      <select
        id="column2"
        onChange={(e) => setColumn2(e.target.value)}
        className="w-5/6 p-2 m-6 border border-gray-300 rounded"
      >
        {/* Options will be populated dynamically */}
      </select>
      <br />

      <label htmlFor="column3" className="m-6">
        Select Column 3: On the basis of
      </label>
      <select
        id="column3"
        onChange={(e) => setColumn3(e.target.value)}
        className="w-5/6 p-2 m-6 border border-gray-300 rounded"
      >
        {/* Options will be populated dynamically */}
      </select>
      <br />

      <Button
        onClick={performQuery}
        className="bg-blue-500 text-white p-2 px-4 m-6 rounded cursor-pointer"
      >
        Perform Query
      </Button>

      {result && (
        <div>
          <h2 className="text-2xl my-5">Query Result</h2>
          <pre
            id="result"
            className="p-2 border border-gray-300 rounded bg-gray-100 whitespace-pre"
          >
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Query3UI;
