import { Routes, Route } from "react-router-dom";

import Todo from "../components/todoForm/TodoForm";
import Home from "../components/Home/Home";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}
export default AppRouter;
