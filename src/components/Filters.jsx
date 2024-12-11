const Filters = ({ setFilterStatus }) => {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-lg font-medium text-gray-600">Filter by Status:</label>
      <select
        onChange={(e) => setFilterStatus(e.target.value)}
        className="border-gray-300 focus:ring focus:ring-blue-200 rounded-lg p-2"
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default Filters;
