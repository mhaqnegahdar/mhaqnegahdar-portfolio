import { SectionName } from "@/lib/types";
import { create } from "zustand";


interface SectionsStoreState{
    activeSection: SectionName
    timeOfLastClick: number

}
interface SectionsStoreAction{
    setActiveSection: (section: SectionName) => void
    setTimeOfLastClick: (time: number) => void

}
export const useSectionsStore = create<SectionsStoreState & SectionsStoreAction>((set) => ({
    activeSection: "Home",
    setActiveSection: (section) => set({ activeSection: section }),
    timeOfLastClick: 0,  
    setTimeOfLastClick: (time) => set({ timeOfLastClick: time }),
  }));
