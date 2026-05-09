import { create } from "zustand";

type cardStore = {
    count : number;
    updateCount: (newCount: number) => void;
}

export const useCartStore = create<cardStore>((set) => ({
    count: 0,
    
    updateCount: (newCount) => set({ count: newCount }),
}));
