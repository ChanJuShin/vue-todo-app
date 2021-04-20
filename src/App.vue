<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addTodoItem"/>
    <TodoList @removeTodoItem="removeTodoItem" @toggleTodoItem="toggleTodoItem"/>
    <TodoFooter @clearTodoItems="clearTodoItems"/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  name: 'App',
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodoItem: function(newTodoItem) {
      var obj = { completed: false, item: newTodoItem };
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeTodoItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1)
    },
    toggleTodoItem: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearTodoItems: function() {
      this.todoItems = [];
      localStorage.clear();
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>