function Todo({todo, index, removeTodo}) {
    const handleRemove = () => {
        removeTodo(index);
    };
    
    return <div className="todo" onClick={handleRemove}>{todo.title} (-)</div>
}