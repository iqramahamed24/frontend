import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import { Pie } from "react-chartjs-2";
import { BASE_URL } from "../../../data/data";
import IncomeTable from "./IncomeTable";
import Chart from "chart.js/auto"; // Import Chart.js

const Income = () => {
  const [incomeData, setIncomeData] = useState([]);
  const chartRef = useRef(null); // Ref for the canvas element
  const [chartInstance, setChartInstance] = useState(null); // State to hold the Chart.js instance

  useEffect(() => {
    // Fetch income data from API or database
    fetch(`${BASE_URL}/income`)
      .then((res) => res.json())
      .then((data) => setIncomeData(data))
      .catch((error) => console.log(error));
  }, []); // Run once on component mount

  useEffect(() => {
    // Initialize or update the chart when incomeData changes
    if (incomeData.length > 0 && chartRef.current) {
      // Ensure the canvas element is available and incomeData is not empty
      if (chartInstance) {
        chartInstance.destroy(); // Destroy previous chart instance if it exists
      }

      const ctx = chartRef.current.getContext("2d"); // Get canvas context
      const newChartInstance = new Chart(ctx, {
        type: "pie", // Chart type (e.g., pie, bar, line)
        data: {
          labels: incomeData.map((income) => income.source),
          datasets: [
            {
              label: "Income Sources",
              data: incomeData.map((income) => income.amount),
              backgroundColor: ["#1d528b", "#3f85c7", "#7c97b1"], // Example colors
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      setChartInstance(newChartInstance); // Store the chart instance in state
    }
  }, [incomeData]); // Update when incomeData changes

  const handleDelete = (id) => {
    // Delete income item by ID
    fetch(`${BASE_URL}/income/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        setIncomeData((prevIncomeData) =>
          prevIncomeData.filter((income) => income.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting income:", error);
      });
  };

  return (
    <div>
      <h2 className="mb-4">Income Details</h2>
      <div className="container mt-5">
        <IncomeTable incomeData={incomeData} setIncomeData={setIncomeData} />
        <table className="income-table mt-3">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Source</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {incomeData.map((income) => (
              <tr key={income.id}>
                <th scope="row">{income.id}</th>
                <td>{income.source}</td>
                <td>{income.amount}</td>
                <td>{income.date}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(income.id)}
                  >
                    Delete <DeleteIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="chart-container mt-5">
          <canvas ref={chartRef} />
          <div className="chart-label">Income Chart</div>
        </div>
      </div>
    </div>
  );
};

export default Income;
