import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📋 My Daily Tasks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            className={`rounded-xl p-4 shadow-md ${
              task.priority === "High"
                ? "bg-red-100"
                : task.priority === "Medium"
                ? "bg-yellow-100"
                : "bg-green-100"
            }`}
          >
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="text-sm text-gray-700">{task.description}</p>
            <p className="text-sm mt-2">Priority: {task.priority}</p>
            <p className="text-sm">Progress: {task.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;