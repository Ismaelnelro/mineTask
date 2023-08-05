import { PayloadAction } from "@reduxjs/toolkit";
import { taskInitialState } from "./taskSlice";
import { taskModel } from "../../../models/taskModels";

//TODO!: agregar una nueva task 
function addNewTaskAction(state: taskInitialState, { payload }: PayloadAction<taskModel>) {
  // state.tasks.push
}
//TODO!: remover una  task 
function removeTaskAction(state: taskInitialState, { payload }: PayloadAction<taskModel>) {
}
//TODO!: actualziar una  task 
function updateTaskAction(state: taskInitialState, { payload }: PayloadAction<taskModel>) {
}

//TODO!: mostart  una  task seleccionada
function ActiveTaskAction(state: taskInitialState, { payload }: PayloadAction<taskModel>) {
}
//TODO!: setear una active task
function SetActiveTaskAction(state: taskInitialState, { payload }: PayloadAction<taskModel>) {
  // cap 362
}

export {
  addNewTaskAction,
  removeTaskAction,
  updateTaskAction,
  ActiveTaskAction,
  SetActiveTaskAction
}