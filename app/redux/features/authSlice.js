import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  showSignInBox: false,
  showInfoBox: false,
  showMobilNav: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setShowSignInBox: (state) => {
      state.showSignInBox = !state.showSignInBox;
    },
    setShowInfoBox: (state) => {
      state.showInfoBox = !state.showInfoBox
    },
    setShowMobilNav: (state) => {
      state.showMobilNav = !state.showMobilNav
    }
  }
})

export const { setShowSignInBox, setShowInfoBox, setShowMobilNav } = authSlice.actions
export default authSlice.reducer