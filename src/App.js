import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  return (
    <><div classname="appcontainer">
    </div><div>
        <h1 classname="heading">Ashley To-Do</h1>
        <TaskInput />
        <TaskList />
      </div></>
    
  );
};

export default App;
