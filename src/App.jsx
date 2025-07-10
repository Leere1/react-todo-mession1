import React from "react";
import TodoWriteForm from "./components/TodoWriteForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">내 투두리스트</h1>

        <TodoWriteForm />
        <TodoList />
      </div>
    </div>
  );
}
