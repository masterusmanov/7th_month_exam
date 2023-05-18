import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const studentStore = defineStore('student', () => {
  const state = reactive({ list: [], load: true, errorMessage: '' })

  const ADD = (data) => {
    state.list.push(data)
  }


  const REMOVE_STUDENT = (id) => {
    
    state.list.forEach((el, index)=> {
        if(el.id == id){
            state.list.splice(index, 1)
            return
        }
    })
  }
  
  const LIST = computed(() => state.list)

  return { LIST, ADD, REMOVE_STUDENT }
})
