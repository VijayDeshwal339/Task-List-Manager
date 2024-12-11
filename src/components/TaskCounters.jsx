import React from 'react';

const TaskCounters = ({ tasks }) => {
  const counts = tasks.reduce(
    (acc, task) => {
      acc[task.status]++;
      return acc;
    },
    { 'To Do': 0, 'In Progress': 0, Done: 0 }
  );

  return (
    <div className="flex gap-4 mb-4">
      {['To Do', 'In Progress', 'Done'].map((status) => (
        <div key={status} className="p-2 border">
          <h3>{status}</h3>
          <p>{counts[status]}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskCounters;
