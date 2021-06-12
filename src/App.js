import React, {useState} from 'react'
import "./App.scss"
// Importing Components
import Form from "./components/Form"
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] =  useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Ali' Todo List</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText}
      setInputText={setInputText} />
      <TodoList todos={todos}  />
    </div>
  )
}

export default App

/* inputText={inputText} */


