import React, { useState, useEffect } from 'react';
import TodoApp from './Components/TodoApp';
import TodoLists from './Components/TodoLists';
import './App.css';

function App() {
  // Initialize state using a function
  const [listTodo, setlistTodo] = useState(() => {
    try {
      const storedTasks = localStorage.getItem('tasks');
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error('Error loading tasks from localStorage:', error);
      return [];
    }
  });

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(listTodo));
  }, [listTodo]);

  // function to add task 
  function addTask(inpText) {
    if (inpText.trim() !== '') {
      let idx = inpText.indexOf(' ');
      inpText = inpText.replace(inpText.charAt(0), inpText[0].toUpperCase());
      inpText = inpText.replace(inpText.charAt(idx + 1), inpText[idx + 1].toUpperCase());

      setlistTodo([...listTodo, inpText]);
    } else {
      alert('Please Enter task');
    }
  }

  // delete function
  const deleteListItem = (key) => {
    if (window.confirm('Are You Sure ?')) {
      let newListTodo = [...listTodo];
      newListTodo.splice(key, 1);
      setlistTodo([...newListTodo]);
    }
  };

  return (
    <div className="App">
      <TodoApp addTask={addTask}></TodoApp>
      <div className="list-container">
        <ul id="todo-list">
          {listTodo.map((listItem, i) => {
            return <TodoLists key={i} index={i} item={listItem} deleteItem={deleteListItem} />;
          })}
        </ul>
      </div>
      <p id="footer">Made with &hearts; by Aniket Gupta</p>
    </div>
  );
}

export default App;
