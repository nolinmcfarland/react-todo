function App() {
    const [todos, setTodos] = React.useState([
        {
            title: "todo 1",
            isComplete: false,
        },
        {
            title: "todo 2",
            isComplete: false,
        },
        {
            title: "todo 3",
            isComplete: false,
        },
    ]);

    const addTodo = title => {
        const newTodos = [...todos, {title: title, isComplete: false}];
        setTodos(newTodos);
    }
    
    const removeTodo = e => {
        const index = Number(e.target.id);
        let newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (<>
        {todos.map((todo, index) => <div
            className="todo"
            key={index}
            id={index}
            onClick={removeTodo}
        >{todo.title}</div>)}
        <TodoForm addTodo={addTodo} />
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);