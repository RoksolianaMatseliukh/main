<template>
  <div>

    <ul>
      <li v-for="(task, index) in todolist"
          :key="index">
        <TodoItem :task="task"/>
      </li>
    </ul>

  </div>
</template>

<script>
import TodoItem from "@/components/studying/todo_done_lists/TodoItem";

import {todo_doneModule} from "@/store/todoList_doneList/todoList_doneList";
import {createNamespacedHelpers} from "vuex";
import {SHOW_TODO_LIST} from "@/store/todoList_doneList/types";

const {mapGetters} = createNamespacedHelpers(todo_doneModule);


export default {
  name: 'TodoList',
  data() {
    return {
      description: ''
    }
  },
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters({
      todolist: SHOW_TODO_LIST
    })
  }
}
</script>

<style>

</style>
