import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Todos from "./components/Todos";

function App(){
    return (
        <Todos>
            <AddTodo/>
            <TodoList/>
        </Todos>
    
)
}

export default App;