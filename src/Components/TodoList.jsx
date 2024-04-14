import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoslice";
import { toggleTodoCompletion } from "../features/todoslice";

function Todos() {
  // Use destructuring to access the 'todos' array from the Redux state
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleCompletion = (todoId) => {
    dispatch(toggleTodoCompletion(todoId));
  };

  return (
    <ul className="list-none p-5">
      {todos.map((todo) => (
        <li
          key={todo.id}
          
          className={`mt-4 flex justify-between items-center px-6 py-3 rounded-3xl text-gray-900 bg-gray-200`}
          
        >
          <div className="flex justify-center align-middle gap-8">
            {todo.completed ? (
              <p className="text-gray-900" style={{ cursor: "pointer" }} onClick={() => handleToggleCompletion(todo.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  class="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </p>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-stopwatch"
                viewBox="0 0 16 16"
                onClick={() => handleToggleCompletion(todo.id)}
                style={{ cursor: "pointer" }}
              >
                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
              </svg>
            )}
            <div className="text-gray-900 my-auto text-xl">{todo.text}</div>
          </div>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-gray-900  border-0 py-1 px-4 focus:outline-none hover:text-red-600 rounded text-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
