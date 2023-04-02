import "./App.css";
import {Routes, Route } from "react-router-dom";

import Todo from "./components/todoForm/TodoForm";
import Home from "./components/Home/Home";


import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
