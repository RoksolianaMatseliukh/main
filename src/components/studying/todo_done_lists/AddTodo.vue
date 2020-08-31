<template>
  <div>

    <input type="text" placeholder="enter new task" v-model="description" class="inpView">
    <button @click="addTask"
            class="btn btn-outline-info btnMargin "> 
            add 
    </button>

  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import {todo_doneModule} from "@/store/todoList_doneList/todoList_doneList";
import {ADD_TASK} from "@/store/todoList_doneList/types";

const {mapActions} = createNamespacedHelpers(todo_doneModule);


export default {
  name: 'AddTodo',
  data() {
    return {
      description: ''
    }
  },
  methods: {
    ...mapActions({
      addTodo: ADD_TASK
    }),
    async addTask() {
      try {
        this.description && await this.addTodo(this.description);
        this.description = '';
      } catch(e) {
        console.error(e);
      }
    }
  }
}
</script>

<style scoped>

  .btnMargin {
    margin-left: 10px;
  }

  .inpView {
    margin-bottom: 20px;
  }

</style>
