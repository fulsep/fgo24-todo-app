import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, createTransform } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt';

import todos from './todos'

const todosPersist = {
  key: "data",
  // start encryption
  // transforms: [encryptTransform({
  //   secretKey: 'todoapp'
  // })],
  // end encryption
  // start encoding
  transforms: [
    createTransform((inbound)=>{
      return window.btoa(JSON.stringify(inbound))
    },(outbound)=>{
      return JSON.parse(window.atob(outbound))
    }),
  ],
  // end encoding
  storage
}

const reducer = combineReducers({
  todos: persistReducer(todosPersist, todos)
})

export default reducer