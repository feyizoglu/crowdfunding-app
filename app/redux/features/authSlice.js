import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  showSignInBox: false,
  showInfoBox: false,
  showMobilNav: false,
  showKickOffBox: false,
}

const authSlice = createSlice({
  name: "auth",
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
    },
    setShowKickOffBox: (state) => {
      state.showKickOffBox = !state.showKickOffBox;
    },
    setCloseMobileNav: (state, action) => {
      state.showMobilNav = action.payload;
    }
  }
})

export const {
  setShowSignInBox,
  setShowInfoBox,
  setShowMobilNav,
  setUser,
  setShowKickOffBox,
  setCloseMobileNav,
} = authSlice.actions;
export default authSlice.reducer

