import { useState } from 'react';
import data from "./data.json";
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {

  const [todos,setTodos] = useState(data);
 
  const onComplete = (id) =>{
    
  
    setTodos(todos.map((todos) => {
      return todos.id === Number(id) ? {...todos, completed: !todos.completed} : {...todos};
    }))
  }

  const onDeleteItem = (id) =>{
      setTodos([...todos].filter(todos => todos.id !== id))
  }

  const addTodo = (newtodo) =>{
    console.log("new todo",newtodo)
    let newItem= {id: +new Date(), task:newtodo, completed: false}
  
    setTodos([...todos,newItem]);
  }

  
  return (
    <div className="container">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos = {todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
    </div>
  );
}

export default App;
