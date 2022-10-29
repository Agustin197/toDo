import React from "react";

function TodoItem ({todos,onComplete,onDeleteItem}) {

const getStyle = () => {
    return {
        textDecoration: todos.completed ? "line-through" : "none",
        margin: "20px",
        border: "1px solid #fff",
        backgroundColor: "CCF7E3"

    }
}    

return (
<div style={getStyle()}>
    <input type="checkbox" 
    checked= {todos.completed}
    onChange= {()=> onComplete(todos.id)}
    />
    {todos.task}
    <button className="add-btn" onClick={() => onDeleteItem(todos.id)}>x</button>
</div>
)
}

export default TodoItem