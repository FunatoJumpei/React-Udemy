export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

//以下はTodo.tsxで指定していた型。似たような型を直接ファイルで指定していたが、
//タイプスクリプト開発において型は一つのファイルにまとめたい。
//そういった際、それぞれのコンポーネント側で、omitやpickを使って、インポートする
//型から必要なプロパティを選別出来る。

// type TodoType = {
//     userId: number;
//     id?: number;
//     title: string;
//     completed?: boolean;
//   };

export type User = {
  name: string;
  hobbies?: string[];
};
