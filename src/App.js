import React, {useState} from 'react'
import "./App.scss"
// Importing Components
import Form from "./components/Form"
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] =  useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Ali' Todo List</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText}
      setInputText={setInputText}
      setStatus={setStatus}/>
      <TodoList todos={todos}  setTodos={setTodos} />
    </div>
  )
}

export default App

/* inputText={inputText} */


