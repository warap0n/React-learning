import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label htmlFor={todo.id}>
        <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClick} id={todo.id} />
      </label>
      {todo.name}
    </div>
  );
  
};

export default Todo;