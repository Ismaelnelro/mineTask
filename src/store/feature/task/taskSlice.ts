import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ActiveTaskAction, SetActiveTaskAction, addNewTaskAction, removeTaskAction, updateTaskAction } from "./taskActions";

import { taskModel } from "../../../models/taskModels";



// {
//   title:"",
//   description:"",
//   completed: false,
//   creatAT: new Date(),
//   endAT: new Date(),
//   file: "",
//   updateAT: new Date()
// }

export interface taskInitialState {
  tasks: taskModel[];
  activeTask: taskModel;
}

export const initialState: taskInitialState = {
  tasks: [],
  activeTask: {
    _id: "",
    title: "",
    description: "",
    completed: "Pending",
    budged: "none",
    creatAT: new Date(),
    endAT: new Date(),
    file: "",
    updateAT: new Date(),
    user: {
      _id: "",
      name: ""
    }
  }
};


export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    onAddnewTask: (state, payload: PayloadAction<taskModel>) => addNewTaskAction(state, payload),
    onRemoveTask: (state, payload: PayloadAction<taskModel>) => removeTaskAction(state, payload),
    onUpdateTask: (state, payload: PayloadAction<taskModel>) => updateTaskAction(state, payload),
    onShowActiveTask: (state, payload: PayloadAction<taskModel>) => ActiveTaskAction(state, payload),
    onSettActiveTask: (state, payload: PayloadAction<taskModel>) => SetActiveTaskAction(state, payload),
  }
})


export const { onAddnewTask, onRemoveTask, onUpdateTask, onShowActiveTask,onSettActiveTask } = taskSlice.actions
export default taskSlice.reducer