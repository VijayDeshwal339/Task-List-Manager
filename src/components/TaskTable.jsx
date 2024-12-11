import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css';

const TaskTable = ({ tasks, updateTask, deleteTask }) => {
  const options = {
    cellEdited: (cell) => updateTask(cell.getData()),
  };

  return (
    <div className="overflow-x-auto">
      <ReactTabulator
        className="tabulator-table"
        data={tasks}
        columns={[
          { title: 'ID', field: 'id', width: 50, headerSort: false },
          { title: 'Title', field: 'title', editor: 'input' },
          { title: 'Description', field: 'description', editor: 'input' },
          {
            title: 'Status',
            field: 'status',
            editor: 'select',
            editorParams: { values: ['To Do', 'In Progress', 'Done'] },
          },
          {
            title: 'Actions',
            formatter: () => "<button class='bg-red-500 text-white px-3 py-1 rounded'>Delete</button>",
            width: 100,
            cellClick: (e, cell) => deleteTask(cell.getData().id),
          },
        ]}
        options={options}
      />
    </div>
  );
};


export default TaskTable;
