import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask === "") return;
    const newTodo = {
      id: Date.now(),            // Unique ID
      text: newTask.trim(),      // Task text
      completed: true           // Not completed initially
    };
    setTodos([...todos, newTodo])
    setNewTask('');
  }

  const toggleCompletion = (id) => { 
    const toggleTodo = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo) 
    setTodos(toggleTodo)
  }

  const deleteToDoListItem = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const editTodoListItem = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, text: newText} : todo));
  };


  return (
    <div className=' w-full h-screen'>
      <Header />
      <div className='flex items-center justify-center my-8'>
        <div className='flex justify-between p-2 border-2 w-[33%] rounded-xl border-blue-300 bg-gray-300'>
          <input className='px-3 outline-none w-full text-xl' type="text" value={newTask} placeholder='Add Your Task...' onChange={(e) => setNewTask(e.target.value)} />
          <button className='w-30 p-2 rounded-xl font-bold bg-blue-600 cursor-pointer hover:text-white hover:bg-green-600 shadow duration-300' onClick={addTask}>Add Task</button>
        </div>
      </div>
      <ToDoList todos={todos} onToggle={toggleCompletion} onDeleteItem={deleteToDoListItem} onEditItem={editTodoListItem}/>
    </div>
  )
}

export default App;
