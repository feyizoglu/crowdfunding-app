import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isClicked: false,
  showInfoBox: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInClickHandler: (state) => {
      state.isClicked = !state.isClicked;
    },
    setShowInfoBox: (state) => {
      state.showInfoBox = !state.showInfoBox
    }
  }
})

export const { signInClickHandler, setShowInfoBox } = authSlice.actions
export default authSlice.reducer