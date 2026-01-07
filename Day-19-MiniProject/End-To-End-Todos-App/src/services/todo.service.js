import axios from "@/lib/axios";

// Fetch all todos for a user
export const getTodos = (userId) => axios.get(`/todos/${userId}.json`);

// Add a new todo
export const addTodo = (userId, todo) => axios.post(`/todos/${userId}.json`, todo);

// Update a todo
export const updateTodo = (userId, todoId, data) =>
  axios.patch(`/todos/${userId}/${todoId}.json`, data);

// Delete a todo
export const deleteTodo = (userId, todoId) =>
  axios.delete(`/todos/${userId}/${todoId}.json`);
