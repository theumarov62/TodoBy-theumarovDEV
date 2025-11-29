import { createSlice } from "@reduxjs/toolkit";

const savedTodo = localStorage.getItem("todos");
const initialState = savedTodo ? JSON.parse(savedTodo) : [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },

    deleteTodo: (state, action) => {
      const filtered = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(filtered));
      return filtered;
    },

    editTodo: (state, action) => {
      const { id, title, description } = action.payload;
      const index = state.findIndex((item) => item.id === id);

      if (index !== -1) {
        state[index] = { id, title, description };
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
