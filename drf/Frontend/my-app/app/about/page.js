import React from "react";

const about = () => {
  return (
    <div className="container mx-auto p-4 lg:p-8">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">About Us</h2>
        <p className="text-gray-700 mt-4 lg:mt-6">
          Welcome to our Data Analysis App, a powerful tool that empowers you to
          gain valuable insights from your data effortlessly. Whether you're
          managing a company's financial records or studying population
          demographics, our app will make the process of calculating total
          entries, average salary, and distribution of salary a breeze.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Features</h3>
          <ul className="list-disc text-gray-700 ml-6">
            <li className="mb-4">
              Total Entries: Discover the total number of entries in your data
              with just a few clicks. Whether it's customer records, employee
              data, or any other dataset, you can quickly find out how many
              records are in your dataset.
            </li>
            <li className="mb-4">
              Average Salary: Calculating the mean salary of all individuals in
              your dataset is now easier than ever. Our app will perform the
              necessary calculations and provide you with the average salary
              value, helping you gain a deeper understanding of your data.
            </li>
            <li className="mb-4">
              Salary Distribution: Gain insights into how salaries are
              distributed among the people in your dataset. Our app not only
              provides the average salary but also breaks down the distribution
              into 25% and 75% segments, giving you a clear picture of how
              income is divided.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">How It Works</h3>
          <p className="text-gray-700">
            Import Data: Begin by importing your dataset into the app. Supported
            file formats include CSV, Excel, and more. Alternatively, you can
            enter the data manually.
            <br />
            <br />
            Analyze Data: Once your data is loaded, choose the analysis options
            you need. Select 'Total Entries' to find the total number of
            entries, 'Average Salary' to calculate the mean salary, and 'Salary
            Distribution' to see how salaries are divided.
            <br />
            <br />
            Results: After a quick analysis, our app will present the results in
            a user-friendly interface. You'll receive the total number of
            entries, the average salary, and a graphical representation of the
            salary.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl lg:text-4xl font-bold">Benefits</h2>
        <ul className="list-disc text-gray-700 ml-6 mt-4">
          <li className="mb-4">
            Time-Saving: Our app streamlines data analysis, saving you valuable
            time.
          </li>
          <li className="mb-4">
            Informed Decision-Making: Accurate insights into your data enable
            better decision-making.
          </li>
          <li className="mb-4">
            User-Friendly: The app is designed for users of all levels, making
            data analysis accessible to everyone.
          </li>
          <li className="mb-4">
            Visual Representation: Understand your data at a glance with clear
            graphical charts.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl lg:text-4xl font-bold">Conclusion</h2>
        <p className="text-gray-700 mt-4">
          Our Data Analysis App is your one-stop solution for analyzing your
          data. Whether you want to know the total number of entries, find the
          average salary, or understand how income is distributed, our app
          provides the tools you need to make informed decisions. Start using
          our app today and unlock the power of your data.
        </p>
      </div>
    </div>
  );
};

export default about;
