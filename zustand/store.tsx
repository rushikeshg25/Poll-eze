import { create } from "zustand";

type option = string;

interface optionState {
  options: option[];
}

export const useStore = create<optionState>((set) => ({
  // initial state
  options: [],
  // methods for manipulating state
  addOption: (title: string) => {
    set((state) => ({
      options: [...state.options, title],
    }));
  },
  removeOption: (title: string) => {
    set((state) => ({
      options: state.options.filter((option) => option !== title),
    }));
  },
}));
