// import { Component } from 'react';
import './ToDoList.css';
import classNames from 'classnames';
import './TodoList.scss';

const ToDoList = ({ todos, onDeleteToDo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <input
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={() => onToggleCompleted}
        />
        <p className="TodoList__text">{text} </p>
        <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteToDo(id)}
        >
          -
        </button>
      </li>
    ))}
  </ul>
);

export default ToDoList;
