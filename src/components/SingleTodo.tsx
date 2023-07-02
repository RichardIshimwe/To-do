import Todo from "../model";
import {AiFillEdit, AiFillDelete} from "react-icons/ai";
import {MdDoneAll} from "react-icons/md";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css";

interface props {
    todo: Todo,
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<props> = ({todo, todos, setTodos}) => {

const [edit, setEdit] = useState<boolean>(false);
const [text, setText] = useState<string>(todo.todo);

const handleDelete = () => {
    const filteredTodo = todos.filter(item => item.id !== todo.id);
    setTodos(filteredTodo);
}

const handleDone = () => {
    setTodos(todos.map(item => item.id === todo.id ? {...item, isDone: !item.isDone} : item))
}

const handleEdit = () => {
    setEdit(!edit);
   if(edit){
    setTodos(todos.map(item => item.id === todo.id ? {...item, todo: text} : item));
    toast.success('todo edited successful..!!');
   }else{
    setEdit(!edit);
    toast.error('todo marked as done.');
   }
}

// setTodos(todos.map(item => item.id === todo.id ? {...item, todo: text} : item))

  return (
    <form className={todo.isDone ? "single_todo1" : "single_todo"}>
      <div className="todo_inside">
        {todo.isDone ?
      <s>{todo.todo}</s>:
      (edit ? 
      <input 
      type="input" 
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      :<span>{todo.todo}</span>)
        }
      <div className="todo_right">
        <span className="icon"><AiFillEdit onClick={handleEdit}/></span>
        <span className="icon"><AiFillDelete onClick={handleDelete}/></span>
        <span className="icon"><MdDoneAll onClick={handleDone}/></span>
      </div>
      </div>
      <ToastContainer />
    </form>
  )
}

export default SingleTodo
