import { create } from "zustand";

const useUiState = create((set) => ({
  homeCategory: "",
  headerImageSrc:
    "https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setHeaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUiState;
