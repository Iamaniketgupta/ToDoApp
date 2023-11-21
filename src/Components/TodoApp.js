import React from "react";
import { useState } from 'react';

function TodoApp(props){
  const [inpText,setnewText] =useState('');
  function getText(e){
    setnewText(e.target.value);
  }
  let inp=document.getElementById('input-box');

return (
   
      <div className='main-container'>
      <h1 className='heading-text'>ToDo Task <span><img src="/logo.png" alt="todo" id="todoimg"/></span></h1>
        <div className='input-field'>
       <input type='text' id='input-box' onChange={getText} placeholder='Add Task' maxLength={20} />
     
       <button id='add-btn' onClick={()=>{props.addTask(inpText); inp.value=''; }}>Add</button>
        </div>
      </div>
    
)
}

export default TodoApp;