import { create } from "zustand";

type option = { title: string; votes: 0 };

interface optionState {
  options: option[];
}

export const useStore = create<optionState>((set) => ({
  // initial state
  options: [],
  // methods for manipulating state
  addOption: (title: string) => {
    set((state) => ({
      options: [...state.options, { title: title, votes: 0 }],
    }));
  },
  removeOption: (title: string) => {
    set((state) => ({
      options: state.options.filter((option) => option.title !== title),
    }));
  },
}));
