import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onToggle, onDeleteItem, onEditItem }) {
    return (
        <>
            <div className="mt-6">
                {
                    todos.map((todo) => (
                        <ToDoItem key={todo.id} todo={todo} onToggle={onToggle} onDeleteItem={onDeleteItem} onEditItem={onEditItem} />
                    ))
                }
            </div>
        </>
    )
}

export default ToDoList;