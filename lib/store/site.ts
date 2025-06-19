// stores/useSite.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SiteState = {
  title: string;
  setTitle: (value: string) => void;
};

export const useSite = create<SiteState>()(
  persist(
    (set) => ({
      title: "",
      setTitle: (value) => set({ title: value }),
    }),
    {
      name: "site-storage",
    }
  )
);
