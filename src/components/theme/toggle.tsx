import * as React from 'react'

import { Sun, Moon } from 'lucide-react'
import { Button } from '~/components/ui/button.tsx'

export function ThemeToggle() {
  const [theme, setThemeState] = React.useState<
    'light' | 'dark' | 'system'
  >('system')

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'light')
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])


  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setThemeState(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden"/>
      <Moon className="hidden h-5 w-5 dark:block"/>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
