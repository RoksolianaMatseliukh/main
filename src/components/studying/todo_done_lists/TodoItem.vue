<template>
  <div>

      <p :class="task.priority && 'priority'"> {{task.title}}
          <button @click="remove(task.id, task.title)"
                  class="btn btn-outline-success btnMargin"> 
                  remove 
          </button>

          <button @click="setStatus(task.id, task.title)"
                  class="btn btn-outline-warning btnMargin"
                  v-if="!task.priority"> 
                  make priority 
          </button>
      </p>

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
    color: rgb(235, 118, 35);
    font-size: 18px;
  }

  .btnMargin {
    margin-left: 5px;
  }
  
</style>
