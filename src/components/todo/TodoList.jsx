import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTodo, getAllTodos } from "../../redux/actions/index";
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../../redux/actions/type";

import Todo from "./Todo";
import Tabs from "../Tabs/Tabs";
import "./TodoList.css";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;
  const totalPages = Math.ceil(todos.length / todosPerPage);
  const pageButtons = [];

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const getTodos = () => {
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const todosToDisplay = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    for (let i = 1; i <= totalPages; i++) {
      const buttonClasses = i === currentPage ? 'active' : '';
      pageButtons.push(
        <button id="buttonPage" key={i} className={buttonClasses} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
    }

    if (currentTab === ALL_TODOS) {
      return todosToDisplay;
    } else if (currentTab === ACTIVE_TODOS) {
      return todosToDisplay.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todosToDisplay.filter((todo) => todo.done);
    }
  };

  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

  return (
    <article>
      <div className="tabs">
        <Tabs currentTab={currentTab} />
        {todos.some((todo) => todo.done) ? (
          <button onClick={removeDoneTodos} className="button clear">
            <i className="fa fa-trash"></i>
          </button>
        ) : null}
      </div>
      <ul>
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>

<div className="buttonsPage">
  {pageButtons}
</div>
      
    </article>
  );
}
export default TodoList;
