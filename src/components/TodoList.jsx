import React from "react";
import TodoItem from "../components/TodoItem.jsx"

function TodoList({todos, onComplete,onDeleteItem}){
    return (
        <div>
            {
            todos.map((todos,index) =>(
                <TodoItem key = {`todo-${index}`}todos = {todos} onComplete = {onComplete} onDeleteItem={onDeleteItem}/>
            ))
            }
        </div>
    )
}

export default TodoList;