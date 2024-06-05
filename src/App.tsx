import axios from "axios";
import React, { useState } from "react";
import { Todo } from "./components/Todo";
import { TodoType, User } from "./types/todo";
import { UserProfile } from "./components/UserProfile";

const user: User = {
  name: "test",
  hobbies: ["test", "test"],
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFeatchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <button onClick={onClickFeatchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
