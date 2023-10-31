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
    
    const removeTodo = index => {
        let newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (<>
        <div className="app">
            <h1 id="app-title">Todos</h1>
            <div className="todo-list">
                {todos.map((todo, index) => <Todo index={index} key={index} todo={todo} removeTodo={removeTodo} />)}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    </>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);