import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

function App() {
   const descr1 = "What to learn111"
   const descr2 = "What to learn222"

   const task1 = [
      {id: 1, title: 'React', isDone: true},
      {id: 2, title: 'CSS', isDone: true},
      {id: 3, title: 'NextJS', isDone: false},
   ]

   const task2 = [
      {id: 1, title: 'Redux', isDone: true},
      {id: 2, title: 'Flutter', isDone: false},
      {id: 3, title: 'HTML', isDone: false},
   ]

    return (
        <div className="App">
           <TodoList descr={descr1} wold={12334} task={task1}/>
           <TodoList descr={descr2} task={task2} />
        </div>
    );
}

export default App;
