import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: null,
}

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    set_data: (state, action) => {
      console.log('hey');
      return {
        data: action.payload
      }
    },
    toggle_read: (state, action) => {
      const { id } = action.payload;
      const newData = state.data.map((item => {
        if(id === item.id){
          item.read = !item.read;
        }
        return item;
      }));

      const newState = {
        ...state,
        data: newData,
      }
      
      return newState;
    },
    toggle_favorite: (state, action) => {
      const { id } = action.payload;
      const newData = state.data.map((item => {
        if(id === item.id){
          item.favorites = !item.favorites;
        }
        return item;
      }));

      const newState = {
        ...state,
        data: newData,
      }

      return newState;
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_data, toggle_read, toggle_favorite } = emailSlice.actions

export default emailSlice.reducer;