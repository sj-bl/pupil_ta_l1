import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Todo {
  name: string;
  isCompleted: boolean;
}

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
            <li
              className="p-4 bg-gray-100 flex items-center justify-between mb-2 rounded-lg"
              key={i}
            >
              <p className={t.isCompleted ? "line-through" : ""}>{t.name}</p>
              <button
                className={
                  t.isCompleted
                    ? "py-2 px-4 text-green-500 cursor-default"
                    : "py-2 px-4 bg-green-500 text-white rounded"
                }
                onClick={(_) => {
                  const newTodo = [...todo];
                  newTodo[i].isCompleted = true;
                  newTodo.sort((a, b) => (a.isCompleted ? 1 : -1));
                  setTodo(newTodo);
                }}
                disabled={t.isCompleted}
              >
                {t.isCompleted ? "Completed" : "Mark Completed"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
