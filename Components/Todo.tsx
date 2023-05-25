import * as React from 'react';
import { useState } from 'react';
import { Itodo } from '../Interfaces/AppInterfaces';
import { IoMdClose } from 'react-icons/io';
interface Props {
  props?: Itodo;
  todoCompleted(todoToDelete: number): void;
}

const Todo = ({ props, todoCompleted }: Props) => {
  const [completed, setcompleted] = useState<boolean>(props.completed);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setcompleted(!completed);
    const task = document.getElementById(event.target.value);
    completed
      ? (task.style.textDecoration = 'none')
      : (task.style.textDecoration = 'line-through');
  };
  return (
    <div className="todo">
      <div className="todoTable">
        <span id={String(props.id)} className="spanTodo">
          {props.todo}
        </span>
        <span className="spanNumber">{props.completionDate}</span>
        <span className="spanCheckbox">
          <input
            type="checkbox"
            value={props.id}
            checked={completed}
            onChange={handleChange}
          />
        </span>
      </div>

      <button
        onClick={() => {
          todoCompleted(props.id);
        }}
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default Todo;
