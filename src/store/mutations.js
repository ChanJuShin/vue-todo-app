const addTodoItem = (state, newTodoItem) => {
  const obj = { completed: false, item: newTodoItem };
  localStorage.setItem(newTodoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};

const removeTodoItem = (state, { todoItem, index }) => {
  localStorage.removeItem(todoItem.item);
  state.todoItems.splice(index, 1)
};

const toggleTodoItem = (state, { todoItem, index }) => {
  state.todoItems[index].completed = !state.todoItems[index].completed;
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};

const clearTodoItems = (state) => {
  state.todoItems = [];
  localStorage.clear();
};

export { addTodoItem, removeTodoItem, toggleTodoItem, clearTodoItems };