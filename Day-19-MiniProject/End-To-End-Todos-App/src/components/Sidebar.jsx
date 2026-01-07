import React from "react";

const Sidebar = ({ todos, selectTodo, selectedTodo }) => {
  return (
    <aside className="w-60 border-r p-4">
      <h2 className="font-bold mb-2">Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-2 cursor-pointer ${selectedTodo?.id === todo.id ? "bg-gray-300" : ""}`}
            onClick={() => selectTodo(todo)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
