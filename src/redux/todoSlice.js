import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        value:"",
        todoList:["task1", "task2"]
    },
    reducers: {
        setValue(state, action){
            state.value = action.payload;
        },
        addTask(state){
            state.todoList.push(state.value);
            state.value = "";
        }
    },
})


export const {setValue, addTask } = todoSlice.actions;
export default todoSlice.reducer;