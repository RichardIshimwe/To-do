import Todo from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const ListTodo: React.FC<props> = ({todos, setTodos}) => {
  return (
    <div className="all_todo">
           {todos.length > 0 ? 
           todos.map(t => <SingleTodo todo={t} todos={todos} setTodos={setTodos} key={t.id}/>) 
        //    todos.map(t => <li>{t.todo}</li>) 
           : <p>There is no todo</p>}
    </div>
  )
}

export default ListTodo;
