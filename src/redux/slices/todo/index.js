import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [],
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.data.push(payload);
      localStorage.setItem('list',JSON.stringify( state.data))
    },

    removeItem: (state, { payload }) => {
      state.data = state.data.filter((item) => item.id !== payload);
      localStorage.setItem('list',JSON.stringify( state.data))
    },

    editItem: (state, { payload }) => {
      state.data = state.data.map((item) => {
        if (item?.id === payload?.id) {
          return payload;
        } else {
          return item;
        }
      });
      localStorage.setItem('list', JSON.stringify(state.data))
    },

    addItemPhone: (state, { payload }) => {

      state.data = state.data.map((item) => {
        if (item?.id === payload?.id) {
          return {
            ...item,
            phones: [...(item?.phones || []), payload?.phone],
          };
        } else {
          return item;
        }
      });
      localStorage.setItem('list', JSON.stringify(state.data))
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, editItem, addItemPhone } = counterSlice.actions;

export default counterSlice.reducer;
