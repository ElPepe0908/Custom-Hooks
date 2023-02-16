import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return { dispatch, todos };
};

const initialState = [];

export const useTodo = () => {
  const { dispatch, todos } = useTodos();

  const handleNewTodo = (todo) => {
    // Creo la accion
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    // Le mando la accion al reducer`
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  // const todosCount = todos.length;

  // const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};

// 17h   7d
// 25h   10d
