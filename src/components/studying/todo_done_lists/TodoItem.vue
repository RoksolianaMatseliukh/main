<template>
  <div class="taskMargin">

          <span :class="task.priority && 'priority'"> {{task.title}} </span>

          <button @click="remove(task.id, task.title)"
                  class="btn btn-outline-success btnMargin"> 
                  remove 
          </button>

          <button v-if="!task.priority"
                  @click="setStatus(task.id, task.title)"
                  class="btn btn-outline-warning btnMargin"> 
                  make priority 
          </button>
 
  </div>
</template> 

<script>
import {todo_doneModule} from "@/store/todoList_doneList/todoList_doneList";
import {createNamespacedHelpers} from "vuex";
import {REMOVE_TASK, SET_STATUS_TRUE} from "@/store/todoList_doneList/types";

const {mapActions} = createNamespacedHelpers(todo_doneModule);


export default {
  name: 'TodoItem',
  props: {
    task: {
      type: Object
    }
  },
  methods: {
    ...mapActions({
      removeTodo: REMOVE_TASK,
      setPriority: SET_STATUS_TRUE
    }),
    async remove(id, title) {
      try {
        await this.removeTodo({id, title});
      } catch(e) {
        console.error(e);
      }
    },
    async setStatus(id, title) {
      try {
        await this.setPriority({id, title});
      } catch(e) {
        console.error(e);
      }
    }
  }
}
</script>

<style scoped>

  .priority {
    background-color: rgb(235, 118, 35);
    color: white;
    padding: 5px;
    font-size: 18px;
  }

  .btnMargin {
    margin-left: 10px;
  }

  .taskMargin {
    margin-top: 15px;
  }
  
</style>
