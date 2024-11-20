import { create } from "zustand";
import { persist } from "zustand/middleware";

type UIStore = {
  MENU_OPEN: boolean;
  isLoading: boolean;
  toastMessage: string | null;
  errorMessage: string | null;

  // Actions to update the state
  TOGGLE_MENU: (v: boolean) => void;

  setLoading: (loading: boolean) => void;
  showToast: (message: string) => void;
  clearToast: () => void;
  setError: (message: string | null) => void;
};

const useGlobalUIStore = create<UIStore>((set) => ({
  // Initial state
  MENU_OPEN: false,
  isLoading: false,
  toastMessage: null,
  errorMessage: null,

  // Actions
  TOGGLE_MENU: (v: boolean) => set({ MENU_OPEN: v }),

  setLoading: (loading: boolean) => set({ isLoading: loading }),

  showToast: (message: string) => set({ toastMessage: message }),

  clearToast: () => set({ toastMessage: null }),

  setError: (message: string | null) => set({ errorMessage: message }),
}));

export default useGlobalUIStore;
