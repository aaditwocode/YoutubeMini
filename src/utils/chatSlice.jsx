import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage(state, action) {

      state.messages.unshift(action.payload);


      if (state.messages.length > 10) {
        state.messages.splice(10, 1); 
      }
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
