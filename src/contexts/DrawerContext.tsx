import { createContext, ReactNode, useContext, useState } from 'react'

interface DrawerProviderProps {
  children: ReactNode
}

interface DrawerContextData {
  isDrawerOpen: boolean
  toggleDrawer: () => void
}

const DrawerContext = createContext({} as DrawerContextData)

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  function toggleDrawer() {
    setIsDrawerOpen((prevState) => !prevState)
  }

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

export function useDrawer() {
  const context = useContext(DrawerContext)

  return context
}
