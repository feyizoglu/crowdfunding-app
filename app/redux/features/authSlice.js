import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  showSignInBox: false,
  showInfoBox: false,
  showMobilNav: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setShowSignInBox: (state) => {
      state.showSignInBox = !state.showSignInBox;
    },
    setShowInfoBox: (state) => {
      state.showInfoBox = !state.showInfoBox;
    },
    setShowMobilNav: (state) => {
      state.showMobilNav = !state.showMobilNav;
    }
  }
})

export const { setShowSignInBox, setShowInfoBox, setShowMobilNav, setUser } = authSlice.actions
export default authSlice.reducer