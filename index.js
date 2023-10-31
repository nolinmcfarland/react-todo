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
    const [value, setValue] = React.useState('');
    
    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return;
        const newTodos = [...todos, {title: value, isComplete: false}];
        setTodos(newTodos);
        setValue('');
    };
    
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add todo..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);