import { Routes, Route } from "react-router-dom";
import TodoMain from "./Components";
import Qollanma from "./Pages/Qollanma";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoMain />} />
      <Route path="/qollanma" element={<Qollanma />} />
    </Routes>
  );
}

export default App;
