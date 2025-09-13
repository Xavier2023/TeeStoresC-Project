import { createSlice } from "@reduxjs/toolkit";

const getInitaiDarkMode = () => {
  const storedDarkMode = localStorage.getItem('darkmode')

  return storedDarkMode ? JSON.parse(storedDarkMode) : true
}

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    darkMode: getInitaiDarkMode(),
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    setDarkMode: (state) => {
        localStorage.setItem('darkmode', JSON.stringify(!state.darkMode))
        state.darkMode = !state.darkMode
    }
  },
});

export const { startLoading, stopLoading, setDarkMode } = uiSlice.actions;
