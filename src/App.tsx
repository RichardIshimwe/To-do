import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ListTodo from "./components/ListTodo";
import Todo from "./model";
let name: string = "Taskify";

let App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) =>{
       e.preventDefault();
       if(todo) {
        setTodos([...todos, {id: todos.length + 1, todo, isDone: false}])
        setTodo("");
      }
  }
  console.log(todos);
  return (
    <div className="App">
     <span id="heading"><p>{name}</p></span>
     <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
     <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
