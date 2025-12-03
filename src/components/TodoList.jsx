import { useState } from "react";
import TodoItem from "./TodoItem";
import { Plus } from "lucide-react";

export default function TodoList({
  todos,
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  progress,
}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Work");
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    if (["Work", "Personal", "Learning", "Important"].includes(filter))
      return t.category === filter;
    return true;
  });

  const handleAdd = () => {
    if (text.trim() === "") return;
    addTodo(text, category);
    setText("");
  };

  return (
    <div className="w-full max-w-2xl bg-gray-950/60 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-2xl">

      <h1 className="text-white text-3xl font-semibold mb-6 text-center">
        Todo App
      </h1>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-gray-300 text-sm mb-6 text-center">
        {progress}% Completed
      </p>

      {/* Add Input Section */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">

        <input
          className="flex-1 px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Add new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select
          className="px-3 py-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Work</option>
          <option>Personal</option>
          <option>Learning</option>
          <option>Important</option>
        </select>

        <button
          onClick={handleAdd}
          className="px-5 py-3 bg-purple-600 rounded-md text-white hover:bg-purple-500 active:scale-95 transition flex items-center justify-center gap-1 w-full sm:w-auto"
        >
          <Plus size={18} /> Add
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap justify-center">
        {["all", "completed", "pending", "Work", "Personal", "Learning", "Important"].map(
          (f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm transition ${
                filter === f
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {f}
            </button>
          )
        )}
      </div>

      {/* Todo List */}
      <div className="space-y-4">
        {filteredTodos.length === 0 ? (
          <p className="text-gray-500 text-center py-6">No tasks found</p>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}
