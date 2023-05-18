import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const teacherStore = defineStore('teacher', () => {
  const state = reactive({ list: [], load: true, errorMessage: '' })

  const ADD = (data) => {
    state.list.push(data)
  }

  const REMOVE_TEACHER = (name) => {
    for (let i = 0; i < state.list.length; i++){
      if (state.list[i].first_name === name){
         state.list.splice(i, 1)
         console.log(`delete - ${name}`);
      }
    }
    console.log(name);
  }

  const LIST = computed(() => state.list)

  return { LIST, ADD, REMOVE_TEACHER }
})
