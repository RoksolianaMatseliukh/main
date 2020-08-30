import {SET_TODO, ADD_TODO, REMOVE_TODO, ADD_DONE, SET_DONE, UPDATE_STATUS} from "@/store/todoList_doneList/types";

export const mutations = {
    [SET_TODO]: (state, list) => {
        state.todoList = list;
    },
    [ADD_TODO]: (state, todo) => {
        state.todoList.push(todo);
    },
    [REMOVE_TODO]: (state, id) => {
        state.todoList = state.todoList.filter(todo => todo.id != id)
    },
    [ADD_DONE]: (state, done) => {
        state.doneList.push(done);
    },
    [SET_DONE]: (state, list) => {
        state.doneList = list;
    },
    [UPDATE_STATUS]: (state, id) => {
        state.todoList.filter(task => {
            if (task.id == id) {
                task.priority = true
            }
        })
    }
}