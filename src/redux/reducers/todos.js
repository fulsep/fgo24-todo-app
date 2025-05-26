import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: []
}

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: function(state, action){
      let id
      if (state.list.length === 0) {
        id = state.list.length +1
      } else {
        id = state.list.slice(-1)[0].id + 1
      }
      state.list.push({
        id,
        taskName: action.payload,
        checked: false
      })
      return state
    },
    editTask: function(state, action){
      const {id, taskName} = action.payload
      const found = state.list.findIndex(todo => todo.id === id)
      state.list[found].taskName = taskName
      return state
    },
    toggleComplete: function(state, action){
      const {id, checked} = action.payload
      let found = null
      if(typeof id === "number"){
        found = state.list.findIndex(todo => todo.id === id)
        state.list[found].checked = checked
      }
      if(Array.isArray(id)){
        let listIndex = []
        id.forEach(id => {
          listIndex.push(state.list.findIndex(o=>o.id===id))
        })
        listIndex.forEach(found=>{
          state.list[found].checked = checked
        })
      }
      return state
    },
    removeTask: function(state, action){
      let list = []
      if(typeof action.payload === "number"){
        list = state.list.filter(o => o.id !== action.payload)
      }
      if(Array.isArray(action.payload)){
        list = state.list.filter(o=> action.payload.includes(o.id))
      }
      return {
        list
      }
    },
  }
})

export const {addTask, editTask, toggleComplete, removeTask} = todos.actions
export default todos.reducer