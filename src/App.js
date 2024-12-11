import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Filters from './components/Filters';
import TaskTable from './components/TaskTable';
import AddTaskForm from './components/AddTaskForm';
import TaskCounters from './components/TaskCounters';
import fetchData from './utils/fetchData';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');

  useEffect(() => {
    fetchData()
      .then((data) => {
        setTasks(data);
        setFilteredTasks(data);
      })
      .catch(() => toast.error('Failed to fetch tasks!'));
  }, []);

  useEffect(() => {
    setFilteredTasks(
      filterStatus === 'All'
        ? tasks
        : tasks.filter((task) => task.status === filterStatus)
    );
  }, [filterStatus, tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    toast.success('Task added successfully!');
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    toast.success('Task updated successfully!');
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast.success('Task deleted successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
          Task List Manager
        </h1>
        <div className="space-y-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <Filters setFilterStatus={setFilterStatus} />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <TaskCounters tasks={tasks} />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <TaskTable
              tasks={filteredTasks}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <AddTaskForm addTask={addTask} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
