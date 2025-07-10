import { useTodos } from "../hooks/useTodos";
import { useState, useRef, useEffect } from "react";

export default function TodoItem({ todo }) {
  const { toggleTodo, removeTodo, updateTodo } = useTodos();

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.value);
  const [showTime, setShowTime] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    if (!editValue.trim()) return;
    updateTodo(todo.id, editValue.trim());
    setIsEditing(false);
  };

  return (
    <li className="flex items-center w-full mb-2 p-3 bg-gray-50 rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400 flex-shrink-0"
      />

      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      ) : (
        <span
          className={`w-full text-sm truncate ${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
          onClick={() => setShowTime((v) => !v)}
        >
          {todo.id}번 / {todo.value}{" "}
          {showTime && (
            <span className="ml-2 text-xs text-gray-500">
              / 등록시간 : {new Date(todo.createTime).toLocaleString()}
            </span>
          )}
        </span>
      )}

      <div className="flex space-x-2 flex-shrink-0 ml-4">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 transition"
            >
              저장
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditValue(todo.value);
              }}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition"
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition"
            >
              수정
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 transition"
            >
              삭제
            </button>
          </>
        )}
      </div>
    </li>
  );
}
