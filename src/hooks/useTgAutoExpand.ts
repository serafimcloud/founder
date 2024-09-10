import { useEffect } from 'react'

import { useExpand } from '@vkruglikov/react-telegram-web-app'

export const useTgAutoExpand = () => {

  try {
    const getComputedStyleValue = (variable: string) => {
      return getComputedStyle(document.documentElement).getPropertyValue(variable).trim()
    }

    const bgColor = getComputedStyleValue('--tg-theme-secondary-bg-color')
    const headerColor = getComputedStyleValue('--tg-theme-header-bg-color')

    window.Telegram?.WebApp.setBackgroundColor?.(bgColor)
    window.Telegram?.WebApp.setHeaderColor?.(headerColor)
  } catch (e) {
    console.error(e)
  }

  const [isExpanded, expand] = useExpand()
  useEffect(() => {
    if (!isExpanded) {
      expand()
    }
  }, [expand, isExpanded])
}