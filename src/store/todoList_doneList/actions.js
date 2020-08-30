import {ADD_TASK, REMOVE_TASK, GET_TODO, ADD_TODO, SET_TODO, REMOVE_TODO, ADD_DONE, GET_DONE, SET_DONE, SET_STATUS_TRUE, UPDATE_STATUS} from "@/store/todoList_doneList/types";

import Vue from 'vue';

export const actions = {
    [ADD_TASK]: async ({commit}, payload) => {
        try {
            const {body: {name}} = await Vue.http.post('https://l4store.firebaseio.com/tasks.json', {title: payload, priority: false});
            const todo = {title: payload, priority: false, id: name}
            commit(ADD_TODO, todo)
        } catch(e) {
            console.error(e);
        }
    },
    [REMOVE_TASK]: async ({commit}, payload) => {
        try {
            await Vue.http.delete(`https://l4store.firebaseio.com/tasks/${payload.id}.json`);            
            commit(REMOVE_TODO, payload.id)
            
            await Vue.http.post('https://l4store.firebaseio.com/done.json', {title: payload.title});
            const done = {title: payload.title}
            commit(ADD_DONE, done)
        } catch(e) {
            console.error(e);
        }
    }, 
    [GET_TODO]: async ({commit}) => {
        try {
            const {body} = await Vue.http.get('https://l4store.firebaseio.com/tasks.json')
            const list = []
            for(let id in body) {
                list.push({...body[id], id});
            }
            commit(SET_TODO, list)
        } catch(e) {
            console.error(e);
        }
    },
    [GET_DONE]: async ({commit}) => {
        try {
            const {body} = await Vue.http.get('https://l4store.firebaseio.com/done.json')
            const list = []
            for(let id in body) {
                list.push({...body[id]});
            }
            commit(SET_DONE, list)
        } catch(e) {
            console.error(e);
        }
    },
    [SET_STATUS_TRUE]: async ({commit}, payload) => {
        try {
            await Vue.http.put(`https://l4store.firebaseio.com/tasks/${payload.id}.json`, {title: payload.title, priority: true})
            commit(UPDATE_STATUS, payload.id)
        } catch(e) {
            console.error(e);
        }
    }
}