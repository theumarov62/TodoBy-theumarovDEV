import { Routes, Route } from "react-router-dom";
import TodoMain from "./Components";
import Qollanma from "./Pages/Qollanma";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<TodoMain />} />
        <Route path="/qollanma" element={<Qollanma />} />
      </Routes>
    </Provider>
  );
}

export default App;
