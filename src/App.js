import "./App.css";
import React from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {

  const [todoItems, setTodoItems] = React.useState(
    [{
      todo: 'Meeting',
      complete: false
    },
    {
      todo: 'Coding Review',
      complete: false
    },
    {
      todo: 'Support Team Members',
      complete: false
    }])


  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems]
    newTodoItems.splice(index, 1)
    setTodoItems(newTodoItems)
  }

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
      ? (newTodoItems[index].complete = true)
      : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems)
  };


  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };


  return (
    <div className="app">
      <div className="inner-container">
        <TodoInput createTodoItem={createTodoItem} />
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            item={item}
            deleteTodoItem={deleteTodoItem}
            completeTodoItem={completeTodoItem}
            updateTodoItem={updateTodoItem}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
