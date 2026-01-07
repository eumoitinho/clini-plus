import { create } from "zustand";

type UserState = {
  name: string | null;
  setName: (name: string | null) => void;
};

export const useUserStore = create<UserState>((set) => ({
  name: null,
  setName: (name) => set({ name })
}));
