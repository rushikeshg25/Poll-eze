import { create } from "zustand";

type option = { title: string; votes: number; totalVotes: number };

interface optionState {
  options: option[];
  addOption: (title: string) => void;
  removeOption: (title: string) => void;
}

export const useStore = create<optionState>((set) => ({
  // initial state
  options: [],
  // methods for manipulating state
  addOption: (title: string) => {
    set((state) => ({
      options: [...state.options, { title: title, votes: 0, totalVotes: 0 }],
    }));
  },
  removeOption: (title: string) => {
    set((state) => ({
      options: state.options.filter((option) => option.title !== title),
    }));
  },
}));
