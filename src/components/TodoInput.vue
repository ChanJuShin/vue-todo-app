<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodoItem">
    <span class="addContainer" @click="addTodoItem">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal">
      <div slot="header">
        <h3 class="modalTitle">할일 내용을 입력해주세요.</h3>
        <button class="modalCloseBtn" @click="showModal = false" type="button">확인</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal";

export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodoItem() {
      if (this.newTodoItem !== '') {
        this.$store.commit('todo/addTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.modalTitle {
  margin: 0;
}
.modalCloseBtn {
  outline: none;
  border: 0;
  padding: 10px;
  background: #ddd;
  color: black;
  cursor: pointer;
  border-radius: 10px;
}
</style>