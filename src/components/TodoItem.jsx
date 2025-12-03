import { useState } from "react";
import { CheckCircle, Circle, Pencil, Trash2 } from "lucide-react";

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newCategory, setNewCategory] = useState(todo.category);

  const saveEdit = () => {
    editTodo(todo.id, newText, newCategory);
    setIsEditing(false);
  };

  return (
    <div className="group flex items-center justify-between bg-gray-900/70 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-700 shadow-md hover:scale-[1.02] transition-all">
     
           <div className="flex items-center gap-3">
    
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? (
            <CheckCircle className="text-green-400 w-6 h-6" />
          ) : (
            <Circle className="text-gray-500 w-6 h-6 group-hover:text-white" />
          )}
        </button>

        <div>
          <p
            className={`text-white text-lg ${
              todo.completed ? "line-through opacity-50" : ""
            }`}
          >
            {todo.text}
          </p>

          <span className="text-xs px-2 py-1 rounded-full bg-purple-600/40 border border-purple-500 text-purple-200">
            {todo.category}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all">
        <button onClick={() => setIsEditing(true)}>
          <Pencil className="text-blue-400 hover:text-blue-300 w-5 h-5" />
        </button>

        <button onClick={() => deleteTodo(todo.id)}>
          <Trash2 className="text-red-400 hover:text-red-300 w-5 h-5" />
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 w-80">
            <h2 className="text-white text-xl mb-4">Edit Task</h2>

            <input
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white mb-3"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />

            <select
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white mb-4"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            >
              <option>Work</option>
              <option>Personal</option>
              <option>Learning</option>
              <option>Important</option>
            </select>

            <div className="flex justify-between mt-2">
              <button
                className="px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-500"
                onClick={saveEdit}
              >
                Save
              </button>

              <button
                className="px-4 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-600"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
