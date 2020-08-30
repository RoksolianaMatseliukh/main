import {state} from "@/store/todoList_doneList/state";
import {actions} from "@/store/todoList_doneList/actions";
import {getters} from "@/store/todoList_doneList/getters";
import {mutations} from "@/store/todoList_doneList/mutations";

const namespaced = true;

export const todo_doneModule = 'todoDone';

export const todoDone = {
  namespaced,
  state,
  actions,
  getters,
  mutations
}