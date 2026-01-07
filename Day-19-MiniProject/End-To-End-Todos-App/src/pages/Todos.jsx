import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { db } from "../lib/firebase";
import {
  ref,
  onValue,
  set,
  remove,
  update,
} from "firebase/database";
import EditTodoPopup from "../components/EditTodoPopup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [filter, setFilter] = useState("all");
  const [newTodo, setNewTodo] = useState("");

  // Fetch todos from Firebase
  useEffect(() => {
    const todosRef = ref(db, "todos");
    onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      const todosArray = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setTodos(todosArray);
    });
  }, []);

  // Create a new todo
  const addTodo = () => {
    if (!newTodo.trim()) return;
    const todoRef = ref(db, `todos/${Date.now()}`);
    set(todoRef, {
      title: newTodo,
      completed: false,
    });
    setNewTodo("");
  };

  // Delete a todo
  const deleteTodo = (id) => {
    remove(ref(db, `todos/${id}`));
    if (selectedTodo?.id === id) setSelectedTodo(null);
  };

  // Toggle completed status
  const toggleStatus = (todo) => {
    update(ref(db, `todos/${todo.id}`), { completed: !todo.completed });
  };

  // Update title
  const updateTodoTitle = (updatedTodo) => {
    update(ref(db, `todos/${updatedTodo.id}`), { title: updatedTodo.title });
    if (selectedTodo?.id === updatedTodo.id) setSelectedTodo(updatedTodo);
  };

  // Filtered todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar filter={filter} setFilter={setFilter} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-2">Todos List</h2>

          <div className="flex gap-2 mb-4">
            <Input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="New todo..."
            />
            <Button onClick={addTodo}>Add</Button>
          </div>

          <ul className="flex flex-col gap-2">
            {filteredTodos.map((todo) => (
              <li
                key={todo.id}
                className={`p-2 cursor-pointer rounded ${
                  selectedTodo?.id === todo.id ? "bg-blue-200" : "hover:bg-gray-100"
                } flex justify-between items-center`}
                onClick={() => setSelectedTodo(todo)}
              >
                <span className={todo.completed ? "line-through" : ""}>
                  {todo.title}
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleStatus(todo)}
                  >
                    {todo.completed ? "Mark Pending" : "Complete"}
                  </Button>
                  <EditTodoPopup todo={todo} onUpdate={updateTodoTitle} />
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {selectedTodo ? (
            <div className="p-4 border rounded shadow">
              <h2 className="text-xl font-bold mb-2">Todo Details</h2>
              <p>
                <strong>Title:</strong> {selectedTodo.title}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {selectedTodo.completed ? "Completed" : "Pending"}
              </p>
            </div>
          ) : (
            <p>Select a todo to see details</p>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center">
        Todos Application &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Todos;
