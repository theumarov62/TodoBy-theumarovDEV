import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../todoSlice";
import { Link } from "react-router-dom";

function TodoMain() {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editTodoItem, setEditTodoItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTodoItem = { id: Date.now(), title, description };
    dispatch(addTodo(newTodoItem));
    setTitle("");
    setDescription("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleOpenEdit = (item) => {
    setEditTodoItem(item);
    setIsModalOpen(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTodo(editTodoItem));
    setIsModalOpen(false);
    setEditTodoItem(null);
  };

  return (
    <div className="container max-w-3xl mx-auto p-6">
      {/* Form */}
      <form
        className="mb-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-200"
        onSubmit={handleAddTodo}
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Todo
        </h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Todo nomi"
          className="border border-gray-300 p-3 rounded-xl w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Izoh"
          className="border border-gray-300 p-3 rounded-xl w-full mb-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r cursor-pointer from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition transform active:scale-95"
        >
          Qo‘shish
        </button>
      </form>

      {/* Todo ro‘yxati */}
      <div className="space-y-4">
        {todos.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h4>
              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-xl shadow-sm transition transform active:scale-95"
                onClick={() => handleOpenEdit(item)}
              >
                Tahrirlash
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 cursor-pointer text-white font-semibold px-4 py-2 rounded-xl shadow-sm transition transform active:scale-95"
                onClick={() => handleDelete(item.id)}
              >
                O‘chirish
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-3xl w-96 shadow-2xl border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
              Todo Tahrirlash
            </h3>
            <input
              type="text"
              value={editTodoItem.title}
              onChange={(e) =>
                setEditTodoItem({ ...editTodoItem, title: e.target.value })
              }
              className="border border-gray-300 p-3 rounded-xl w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
            <textarea
              value={editTodoItem.description}
              onChange={(e) =>
                setEditTodoItem({
                  ...editTodoItem,
                  description: e.target.value,
                })
              }
              className="border border-gray-300 p-3 rounded-xl w-full mb-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            ></textarea>
            <div className="flex justify-end gap-3 mt-2">
              <button
                className="bg-gray-300 cursor-pointer hover:bg-gray-400 px-4 py-2 rounded-xl shadow-sm transition transform active:scale-95"
                onClick={() => setIsModalOpen(false)}
              >
                Bekor qilish
              </button>
              <button
                className="bg-gradient-to cursor-pointer from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-xl shadow-md transition transform active:scale-95"
                onClick={handleSaveEdit}
              >
                Saqlash
              </button>
            </div>
          </div>
        </div>
      )}

      <Link
        to="/qollanma"
        className="
    cursor-pointer
    fixed 
    right-6 
    top-6
    px-6 py-3
    bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
    text-white font-semibold
    rounded-xl
    shadow-lg shadow-blue-500/40
    hover:shadow-blue-600/60
    hover:scale-105
    active:scale-95
    transition-all duration-300
    z-50
  "
      >
        Qo‘llanma
      </Link>
    </div>
  );
}

export default TodoMain;
