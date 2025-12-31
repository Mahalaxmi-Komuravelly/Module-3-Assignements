import { axiosInstance } from "./axiosInstance";
export async function getTodos(){
    try {
        const todos = await axiosInstance.get();
        return todos;
    } catch (error) {
        console.log(error);
    }
}

export async function getTodoById(id) {
    try {
        const todo = await axiosInstance.get(`/${id}`);
        return todo.data;
        
    } catch (error) {
        console.log(error);
    }
}