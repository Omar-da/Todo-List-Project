import ToDo from "./ToDo";

export default function ToDoList({todos}) {
    
    const todosList = todos.map((todo) => {
        return <ToDo key={todo.id} todo={ todo } />
    })
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            {todosList}
        </div>
    );
}