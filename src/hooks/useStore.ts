import { TWebAuthData } from './../types';
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TStore = {
  isDebug: boolean
  setDebug: (_: boolean) => void
  isStarted: boolean
  setIsStarted: (_: boolean) => void
}

export const useStore = create<TStore>((set) => ({
  isDebug: false,
  setDebug: (isDebug) => set({ isDebug }),
  isStarted: false,
  setIsStarted: (isStarted) => set({ isStarted }),
}))

type TPersistStore = {
  webAuthData: TWebAuthData | null
  setWebAuthData: (_: TWebAuthData | null) => void
  isOnboarded: boolean
  setIsOnboarded: (_: boolean) => void
}

export const usePersistStore = create<TPersistStore>()(
  persist(
    (set) => ({
      webAuthData: null,
      setWebAuthData: (webAuthData) => set({ webAuthData }),
      isOnboarded: false,
      setIsOnboarded: (isOnboarded) => set({ isOnboarded }),
    }),
    {
      name: 'persist-storage',
    }
  )
)