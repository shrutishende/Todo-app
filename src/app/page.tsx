"use client"
import TodoInput from "./components/TodoInput";
import { useState } from "react";
import TodoList from "./components/TodoList";



export default function Home() {
  const [listTodo, setListTodo] = useState<string[]>([])
  
  const addTodo = (inputText: string) => {
    if(inputText!=="")
    setListTodo([...listTodo, inputText])
  }

  const deleteTodo = (key) => {
    let newListTodo = [...listTodo]
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo ])
  }
  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <h1 className="flex justify-center">Todo</h1>
      {listTodo.map((todo,i) => {
        return <TodoList item={todo} key={i} index={i} deleteTodo={deleteTodo } />
      })}
   </div>
  );
}

