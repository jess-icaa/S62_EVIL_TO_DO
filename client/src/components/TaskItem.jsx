import { useState } from "react";

const TaskItem = ({ task }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    alert("Congrats! You did the bare minimum.");
  };

  return (
    <div className={`p-4 rounded-xl shadow-md ${completed ? "bg-gray-200" : "bg-white"}`}>
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p className="text-gray-600">{task.description}</p>
      <button
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        onClick={handleComplete}
      >
        Mark as Completed
      </button>
    </div>
  );
};

export default TaskItem;
