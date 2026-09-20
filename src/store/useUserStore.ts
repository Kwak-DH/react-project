import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  userName: string;
  loginTime: string;
  login: (userName: string) => void;
  logout: () => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
        userName: '',
        loginTime: '',
        login: (userName: string) => {
          const date = new Date();
          const hours = String(date.getHours()).padStart(2, '0');
          const minutes = String(date.getMinutes()).padStart(2, '0');
          const seconds = String(date.getSeconds()).padStart(2, '0');

          set({ userName: userName, loginTime: `${hours}:${minutes}:${seconds}` });
        },
        logout: () => set(() => ({ userName: '', loginTime: '' })),
      }),
      { name: 'userStorage' }
    ,
  ),
);
