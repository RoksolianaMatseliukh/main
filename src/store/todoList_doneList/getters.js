import {SHOW_TODO_LIST, SHOW_DONE_LIST, TODO_LIST_LENGTH, TODO_NUMBER} from "@/store/todoList_doneList/types";

export const getters = {
    [SHOW_TODO_LIST]: state => {
        return state.todoList
    },
    [SHOW_DONE_LIST]: state => {
        return state.doneList
    },
    [TODO_LIST_LENGTH]: state => {
        return state.todoList.length ?`Today's tasks:` :`Well done, all tasks are finished.`
    },
    [TODO_NUMBER]: state => {
        return state.todoList.length
    }
}