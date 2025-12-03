import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("advanced_todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("advanced_todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category) => {
    const newTodo = {
      id: Date.now(),
      text,
      category,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText, newCategory) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: newText, category: newCategory } : t
      )
    );
  };

  const progress =
    todos.length === 0
      ? 0
      : Math.round(
          (todos.filter((t) => t.completed).length / todos.length) * 100
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 p-6 flex items-center justify-center">
      <TodoList
        todos={todos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        progress={progress}
      />
    </div>
  );
}
