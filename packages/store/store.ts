// store.js
import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useStore = create(devtools((set) => ({
  someValue: '',
  setSomeValue: (newValue) => set({ someValue: newValue }),
})));

export default useStore;
