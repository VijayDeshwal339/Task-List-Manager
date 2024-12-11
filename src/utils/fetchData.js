const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data.slice(0, 20).map((task) => ({
      id: task.id,
      title: task.title,
      description: '',
      status: task.completed ? 'Done' : 'To Do',
    }));
  };
  
  export default fetchData;
  