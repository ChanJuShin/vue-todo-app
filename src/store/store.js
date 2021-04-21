import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push((JSON.parse(localStorage.getItem(localStorage.key(i)))));
        }
      }
    }
    return arr;
  }
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addTodoItem(state, newTodoItem) {
      const obj = { completed: false, item: newTodoItem };
      localStorage.setItem(newTodoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeTodoItem(state, { todoItem, index }) {
      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(index, 1)
    },
    toggleTodoItem(state, { todoItem, index }) {
      state.todoItems[index].completed = !state.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearTodoItems(state) {
      state.todoItems = [];
      localStorage.clear();
    }
  }
});