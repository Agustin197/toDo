import React from "react"; 
import { useState } from "react";

function TodoForm ({addTodo}) {
    
    const [userInput,setUserInput] = useState("")

    const handleOnChange = (event) => {
        setUserInput(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(userInput.trim() !== "")
        addTodo(userInput);
        setUserInput("")
    }

    return (
    <div style = {{margin:20}}>
        <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} on onChange={handleOnChange}/>
        <button>Add Todo</button>
        </form>
    </div>
)
}


export default TodoForm