import React from "react";
import { TodoType } from "../types/todo";

export const Todo = (props: Omit<TodoType, "id">) => {
  const { userId, title, completed } = props;
  const completedFlag = completed ? "【完】" : "【未】";
  return <p>{`${completedFlag} ${title}(ユーザー名:${userId})`}</p>;
};
