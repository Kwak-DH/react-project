import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LoadingState {
  isLoading: boolean;
  showLoading: (sec?: number) => void;
  hideLoading: () => void;
}

export const useLoadingStore = create(
  persist<LoadingState>(
    (set) => ({
      isLoading: false,
      showLoading: (sec?: number) => {
        console.log('ccd');
        set({ isLoading: true });
        if (sec) {
          const second: number = sec * 1000;

          setTimeout(() => {
            set({ isLoading: false });
          }, second);
        }
      },
      hideLoading: () => set(() => ({ isLoading: false })),
    }),
    { name: 'loadingStorage' },
  ),
);
