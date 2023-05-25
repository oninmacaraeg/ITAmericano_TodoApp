import * as React from 'react';
import { useState } from 'react';
import './style.css';
import { Itodo } from './Interfaces/AppInterfaces';
import Todo from './Components/Todo';
import { FcAddColumn } from 'react-icons/fc';

export default function App() {
  const [todo, setTodo] = useState<string>('');
  const [completionDate, setCompletionDate] = useState<number>(0);
  const [id, setid] = useState<number>(0);
  
  const [todoList, setTodoList] = useState<Itodo[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //console.log(event.target.name);
    event.target.name === 'todo'
      ? setTodo(event.target.value)
      : setCompletionDate(Number(event.target.value));
  };

  const addTodo = (): void => {
    const newTodo = {
      id: Date.now(),
      todo: todo,
      completionDate: completionDate,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setTodo('');
    setCompletionDate(0);
    console.log(todoList);
  };

  const todoCompleted = (todoToDelete: number): void => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.id != todoToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="AddFormContainer">
          <div>
            <input
              name="todo"
              value={todo}
              type="text"
              placeholder="To do..."
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              name="completionDate"
              value={completionDate}
              type="number"
              placeholder="estimated day fo completion..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button onClick={addTodo}>
            <FcAddColumn size=".5x" />
          </button>
        </div>
      </div>
      <div className="todoList">
        {todoList.map((todo: Itodo, key: number) => {
          return <Todo key={id} props={todo} todoCompleted={todoCompleted} />;
        })}
      </div>
    </div>
  );
}
