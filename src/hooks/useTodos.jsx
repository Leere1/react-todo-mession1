import { createContext, useContext, useState, useRef } from "react";
import { getItem, setItem } from "../utils/storage.js";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const initialTodos = getItem("todos", [
    { id: 1, value: "공부하기", completed: true, createTime: Date.now() },
    { id: 2, value: "코딩하기", completed: false, createTime: Date.now() },
    { id: 3, value: "운동하기", completed: true, createTime: Date.now() },
  ]);
  const [todos, setTodos] = useState(initialTodos);

  const lastId = useRef(
    initialTodos.length > 0 ? todos[todos.length - 1].id + 1 : 1
  );

  const totalSet = (nextTodos) => {
    setTodos(nextTodos);
    setItem("todos", JSON.stringify(nextTodos));
  };

  const addTodo = (value) => {
    const todo = {
      id: lastId.current++,
      value,
      completed: false,
      createTime: Date.now(),
    };
    totalSet([...todos, todo]);
  };

  const removeTodo = (id) => {
    totalSet(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    totalSet(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, newValue) => {
    setTodos((prev) =>
      prev.map((t) => (t.id == id ? { ...t, value: newValue } : t))
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("");
  }
  return context;
}
