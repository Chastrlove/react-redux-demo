import { ADD_TODO, TOGGLE_TODO, SET_FILTER,GET_TODO } from "./actionTypes";
import { getTodoValues } from "api/todoApi";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const newValue = (value) => ({
  type: GET_TODO,
  payload: {
    value:value
  }
});

export const getRemoteValue=()=>{
  return async(dispatch,getState)=>{
    const value = await getTodoValues();
    dispatch(
      newValue(value)
    )
  }
}
