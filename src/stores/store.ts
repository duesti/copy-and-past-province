import { create } from "zustand";
import { persist } from "zustand/middleware"

interface CopiedStore {
  lastCopied: string;
  setLastCopied: (text: string) => void;
}

export const useCopiedStore = create<CopiedStore>((set) => ({
  lastCopied: "",
  setLastCopied: (text) => set({ lastCopied: text })
}))

interface SettingsStore {
  soundOnCopy: boolean,
  setSoundOnCopy: () => void;
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      soundOnCopy: false,
      setSoundOnCopy: () => set(
        (state) => ({ soundOnCopy: !state.soundOnCopy })
      )
    }),
    {
      name: "settings"
    }
  )
)