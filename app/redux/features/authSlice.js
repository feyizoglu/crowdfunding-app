import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  showSignInBox: false,
  showInfoBox: false,
  showMobilNav: false,
  showKickOffBox: false,
  projects: [],
  profilPic: null,
  searchInputVal: '',
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
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    setProfilPic: (state, action) => {
      state.profilPic = action.payload;
    },
    setSearchInputVal: (state, action) => {
      state.searchInputVal = action.payload;
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
  setProjects,
  setProfilPic,
  setSearchInputVal
} = authSlice.actions;
export default authSlice.reducer

