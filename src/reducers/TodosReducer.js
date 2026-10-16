export default function TodosReducer(currentTodos, action) {
  let copiedCurrentTodos = [...currentTodos];
  switch (action.type) {
    case "add": {
      const newTodos = [...copiedCurrentTodos, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    }
    case "update": {
      const { id, title, description } = action.payload;
      const updatedTodos = copiedCurrentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, title: title, description: description }
          : todo,
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "delete": {
      const updatedTodos = copiedCurrentTodos.filter(
        (todo) => todo.id !== action.payload,
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
    case "achieve": {
      const updatedTodos = copiedCurrentTodos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo,
      );

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    }
      default: {
          throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
