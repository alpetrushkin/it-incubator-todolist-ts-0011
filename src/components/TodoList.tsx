import React from 'react';

interface TodoListType {
   descr: string
   wold?: number
   task: Array<TaskType>
}

interface TaskType {
   id: number
   title: string
   isDone: boolean
}

export const TodoList = (props: TodoListType) => {
   return (
      <div>
         <div>
            <h3>{props.descr}</h3>
            <div>
               <input/>
               <button>+</button>
            </div>
            <ul>
               {
                  props.task.map(el => {
                     return (
                        <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>
                     )
                  })
               }
            </ul>
            <div>
               <button>All</button>
               <button>Active</button>
               <button>Completed</button>
            </div>
         </div>
      </div>
   );
};

