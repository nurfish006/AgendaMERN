import React, { useState} from 'react';
import Create from './Create';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = () => {
  const [todos, setTodos] = useState([])

  return (
    <div className='home'>
      <h2>Agenda List</h2>
      <Create />
      {
        todos.length===0 ? 
        <div><h2>No Records</h2></div>
        :
        todos.map(todo => (
          <div>
            {todo}
          </div>
        ))
      }
    </div>
  ) 
}

export default Home
