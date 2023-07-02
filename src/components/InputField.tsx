import "./styles.css"

interface props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleSubmit: (e: React.FormEvent) => void
}

export default function InputField({todo, setTodo, handleSubmit}: props) {
  return (
    <form className="input" onSubmit={handleSubmit}>
      <input 
      type="input" 
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      placeholder="enter a task" 
      className="taskInput" />
      <button type="submit" className="goButton" >Go</button>
    </form>
  )
}
