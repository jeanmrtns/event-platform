import { useDrawer } from '@/contexts/DrawerContext'
import { List, X } from 'phosphor-react'
import { Logo } from './Logo'

export function Header() {
  const { isDrawerOpen, toggleDrawer } = useDrawer()

  return (
    <header className="flex items-center justify-between lg:justify-center py-5 w-full bg-gray-700 border-b border-gray-600 px-6 lg:px-0">
      <Logo />

      <button
        className="lg:hidden flex items-center gap-2 text-sm"
        onClick={toggleDrawer}
      >
        Aulas{' '}
        {isDrawerOpen ? (
          <X className="text-blue-500" size={32} />
        ) : (
          <List className="text-blue-500" size={32} />
        )}
      </button>
    </header>
  )
}
