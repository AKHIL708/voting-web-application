import React, { useEffect, useState } from "react";
import homeHeader from "../../assets/images/homeHeader.jpg";
import "./Home.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Election Result One",
      color: "black",
    },
  },
};
function Home() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  return (
    <>
      <section id="Home">
        <header>
          <div className="col">
            <h1>Right To Vote</h1>
          </div>
          <div className="col">
            <img src={homeHeader} alt="" />
          </div>
        </header>
        <div className="election-results">
          <header>
            <h1>Election Results</h1>
          </header>
          <div className="cards">
            <div className="card">
              <Bar options={options} data={data} className="bar" />
            </div>
            <div className="card">
              <Bar options={options} data={data} className="bar" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
