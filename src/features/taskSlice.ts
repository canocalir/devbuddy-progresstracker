import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TaskProps {
    title?: string;
    content?: string;
    priority: number;
    inProgress: boolean;
    completed: boolean;
    inBacklog: boolean;
    id: number
}

const initialState = {
  tasks: [] as TaskProps[]
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<any>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
