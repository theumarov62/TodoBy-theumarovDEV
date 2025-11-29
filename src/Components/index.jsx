import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function todoMain() {
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [add, setAdd] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTodoItem, setEditTodoItem] = useState(null);
  //   Localstorage ga saqlash
  useEffect(() => {
    const savedTodo = localStorage.getItem("todos");
    if (savedTodo) {
      setTodo(JSON.parse(savedTodo));
    }
  }, []);

  // Qo'shilsa localstorage ga ham qo'shiladi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  //   Yangi todo qo'shish
  function addTodo(evt) {
    evt.preventDefault();

    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      description,
    };

    setTodo([...todo, newTodo]);

    setTitle("");
    setDescription("");
  }

  //   Todoni o'chirish
  function deleteTodo(id) {
    const filtered = todo.filter((item) => item.id !== id);
    setTodo(filtered);
  }

  //   Tahrirlash qismi
  function openEditModal(item) {
    setEditTodoItem(item);
    setIsModalOpen(true);
  }

  // Todo saqlash qismi
  function saveEditTodo() {
    setTodo(todo.map((e) => (e.id = editTodoItem.id ? editTodoItem : e)));
    setIsModalOpen(false);
    setEditTodoItem(null);
  }
  return (
    <section>
      <div className="flex justify-end p-2">
        <Link
          to="/qollanma"
          className="bg-green-500 cursor-pointer hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
        >
          QO'LLANMA
        </Link>
      </div>

      {/* Container */}
      <div className="container max-w-[1200px] pt-[20px] ml-auto mr-auto">
        {/* MY Todo */}
        <h1 className="text-3xl font-bold text-center mt-5 mb-8">
          Todo By{" "}
          <a
            href="https://t.me/theumarovmc"
            target="_blank"
            className="text-blue-500  hover:text-blue-600 transition-colors duration-300 underline hover:no-underline"
          >
            theumarovDEV
          </a>
        </h1>

        {/* Form todo */}
        <form className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-2xl space-y-5 mt-6">
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Todo nomini kiriting"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
            />

            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Todo uchun izoh kiriting"
              className="w-full p-3 rounded-xl border border-gray-300 h-28 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition"
            ></textarea>
          </div>

          <button
            type="submit"
            onClick={addTodo}
            className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition active:scale-95"
          >
            Yangi todo qo‘shish
          </button>
        </form>

        <div className="mt-8 ml-1 mr-1 space-y-4">
          {todo.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-gray-100 rounded-xl shadow-sm border flex items-center justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => openEditModal(item)}
                  className="bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-white font-semibold px-4 py-2 rounded-lg transition duration-200"
                >
                  Tahrirlash
                </button>

                <button
                  type="button"
                  onClick={() => deleteTodo(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white cursor-pointer font-semibold px-4 py-2 rounded-lg transition duration-200"
                >
                  O'chirish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Todo Tahrirlash</h2>

            <input
              type="text"
              value={editTodoItem.title}
              onChange={(e) =>
                setEditTodoItem({ ...editTodoItem, title: e.target.value })
              }
              placeholder="Todo nomini kiriting"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 mb-4 transition"
            />

            <textarea
              value={editTodoItem.description}
              onChange={(e) =>
                setEditTodoItem({
                  ...editTodoItem,
                  description: e.target.value,
                })
              }
              placeholder="Todo uchun izoh kiriting"
              className="w-full p-3 rounded-xl border border-gray-300 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 mb-4 transition"
            />

            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 px-3 py-1 rounded cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                Bekor qilish
              </button>
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
                onClick={() => saveEditTodo()}
              >
                Saqlash
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default todoMain;
