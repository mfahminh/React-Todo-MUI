import React, { useState } from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const handleClick = (todo) => {
    // NEVER mutate state directly, like using push() or =
    // Treat state as if it were immutable, so you replace the whole array
    // ...todos is the spread operator, it spreads the array

    // {title: 'todo', done: false, id: 1}
    setTodos([...todos, { title: todo, done: false, id: todos.length + 1 }]);
  };

  const handleCheckbox = (id) => {
    // Kerjakan yang bagian ini yaa, ubah 'done' nya jadi berkebalikan sesuai dengan
    // id yang diberikan
    setTodos([...todos]);
  };

  return (
    <div className="todo">
      <h2 className="title">To-Do List</h2>
      <ToDoForm handleClick={handleClick} />
      <ToDoList todos={todos} handleCheckbox={handleCheckbox} />
    </div>
  );
};

export default ToDo;
