import { createSlice , nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
        const todo = {
            id: nanoid(), 
            text: action.payload
        }
        state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodoCompletion: (state, action) => {
      const todoToToggle = state.todos.find(todo => todo.id === action.payload);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompletion } = todoSlice.actions;
export default todoSlice.reducer;
