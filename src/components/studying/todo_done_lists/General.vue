<template>
  <div id="generalView">

    <div>
      <AddTodo/>

      <p v-if="todoNumber"
          class="msgView"> 
          Task(s) to do: {{ todoNumber }}
      </p>

      <h5 class="taskNameView"> {{ msg }} </h5>
      <TodoList/>

      <router-link class="btn btn-info" 
                     tag="button" 
                     :to="{name: 'ListStart'}"> 
                     back 
      </router-link>
      <router-link class="btn btn-info btnMargin" 
                     tag="button" 
                     :to="{name: 'Home'}"> 
                     go home 
      </router-link>
    </div>

    <div id="secondBlock">
      <h5 class="taskNameView"> Finished tasks: </h5>

      <DoneList/>
    </div>

  </div>
</template>

<script>
import AddTodo from "@/components/studying/todo_done_lists/AddTodo";
import TodoList from "@/components/studying/todo_done_lists/TodoList";
import DoneList from "@/components/studying/todo_done_lists/DoneList";

import {todo_doneModule} from "@/store/todoList_doneList/todoList_doneList";
import {GET_TODO, GET_DONE, TODO_LIST_LENGTH, TODO_NUMBER} from "@/store/todoList_doneList/types";
import {createNamespacedHelpers} from "vuex";

const {mapGetters} = createNamespacedHelpers(todo_doneModule);


export default {
  name: 'General',
  data() {
    return {
      description: ''
    }
  },
  components: {
    AddTodo,
    TodoList,
    DoneList
  },  
  computed: {
    ...mapGetters({
      msg: TODO_LIST_LENGTH,
      todoNumber: TODO_NUMBER
    })
  },
  async beforeMount() {
    try {
      await this.$store.dispatch(`${todo_doneModule}/${GET_TODO}`);
      await this.$store.dispatch(`${todo_doneModule}/${GET_DONE}`);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style scoped>

  #generalView {
    display: flex;
    flex-direction: raw;
    justify-content: flex-start;
    align-items: baseline;
    margin-top: 25px;
  }

  #secondBlock {
    margin-left: 200px;
    padding: 15px;
    background-color: teal;
  }

  .msgView {
    padding: 10px;
    background-color: rgb(112, 173, 173);
    color: white;
  }

  .nameView {
    color: teal;
  }

  .btnMargin {
    margin-left: 10px;
  }

  .taskNameView {
    border-bottom: 1px solid black;
  }

</style>
