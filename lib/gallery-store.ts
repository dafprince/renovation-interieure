import { create } from "zustand"

interface GalleryStore {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export const useGalleryStore = create<GalleryStore>((set) => ({
  activeCategory: "all",
  setActiveCategory: (category) => set({ activeCategory: category }),
}))
