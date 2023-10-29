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
    ])
    return (<>
        {todos.map((todo, index) => <div key={index}>{todo.title}</div>)}
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);