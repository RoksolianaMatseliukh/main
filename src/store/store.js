import Vue from 'vue';
import Vuex from 'vuex';
import {todoDone, todo_doneModule} from "@/store/todoList_doneList/todoList_doneList";

Vue.use(Vuex);


export const store = new Vuex.Store({
    modules: {
      [todo_doneModule]: todoDone
    }
  })