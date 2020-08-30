<template>
  <div>

    <ul>
      <li v-for="(done, index) in donelist"
          :key="index">
        <DoneItem :done="done"/>
      </li>
    </ul>

  </div>
</template>

<script>
import DoneItem from "@/components/studying/todo_done_lists/DoneItem";

import {todo_doneModule} from "@/store/todoList_doneList/todoList_doneList";
import {createNamespacedHelpers} from "vuex";
import {SHOW_DONE_LIST} from "@/store/todoList_doneList/types";

const {mapGetters} = createNamespacedHelpers(todo_doneModule);


export default {
  name: 'DoneList',
  components: {
    DoneItem
  },
  computed: {
    ...mapGetters({
      donelist: SHOW_DONE_LIST
    })
  }
}
</script>

<style scoped>

</style>
