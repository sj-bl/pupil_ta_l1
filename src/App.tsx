import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Todo {
  name: string;
  isCompleted: boolean;
}

const TodoItems: React.FC<{ t: Todo; setTodo: (t: Todo | null) => void }> = ({
  t,
  setTodo,
}) => {
  return (
    <li className="bg-gray-100 flex items-center justify-between mb-2 rounded-lg">
      <input
        type="text"
        value={t.name}
        disabled={t.isCompleted}
        onChange={(e) => setTodo({ ...t, name: e.target.value })}
        className={`py-2 px-4 text-black rounded-l flex-1 border-2 border-transparent focus:border-green-500 outline-none box-border ${
          t.isCompleted ? "" : "bg-gray-200"
        }`}
      />

      <button
        className={
          t.isCompleted
            ? "py-2 px-4 text-green-500 cursor-default"
            : "py-2 px-4 bg-green-500 text-white border-2 border-transparent"
        }
        onClick={(_) => setTodo({ ...t, isCompleted: true })}
        disabled={t.isCompleted}
      >
        {t.isCompleted ? "Completed" : "Mark Completed"}
      </button>
      <button
        className="py-2 px-4 bg-red-500 text-white rounded-r border-2 border-transparent"
        onClick={(_) => setTodo(null)}
      >
        Remove
      </button>
    </li>
  );
};

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [value, setValue] = useState("");

  return (
    <div className="max-w-2xl mx-auto my-4 font-bold">
      <h1 className="text-center text-4xl mb-6">Todos</h1>
      <div>
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            if (value) {
              setTodo((prev) => [...prev, { isCompleted: false, name: value }]);
              setValue("");
            }
          }}
        >
          <input
            type="text"
            value={value}
            className="p-2 bg-gray-100 rounded-tl rounded-bl w-full focus:border-blue-500 border-transparent border-2 outline-none"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-tr rounded-br"
            type="reset"
          >
            Add
          </button>
        </form>
      </div>
      <ul className="mt-4">
        {todo.map((t, i) => {
          return (
            <TodoItems
              t={t}
              setTodo={(newTodo) => {
                setTodo((prev) => {
                  if (newTodo) {
                    return prev.map((td, j) => (i === j ? newTodo : td));
                  } else {
                    return prev.filter((_, j) => i !== j);
                  }
                });
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
