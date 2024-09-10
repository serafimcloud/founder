import { useInitData } from '@vkruglikov/react-telegram-web-app'
import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import { useStore, usePersistStore } from './useStore'
export const useStart = () => {
  const [initDataUnsafe] = useInitData()
  const { isStarted, setIsStarted } = useStore()
  const { isOnboarded } = usePersistStore()
  // const routerLocation = useLocation()

  const startParam = initDataUnsafe?.start_param

  // if (!startParam) {
    // const queryParameters = new URLSearchParams(routerLocation.search)
    // const queryStartParam = queryParameters.get('start')
    // if (queryStartParam) {
    //  startParam = queryStartParam
    // }
  // }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const app = window.Telegram.WebApp
      if (app.ready) {
        app.ready()
      }
      app.disableClosingConfirmation()
      document.body.dataset.theme = app.colorScheme

      // Используем MutationObserver для отслеживания изменений colorScheme
      const observer = new MutationObserver(() => {
        document.body.dataset.theme = app.colorScheme
      })

      observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] })

      return () => observer.disconnect()
    }

    if (!isStarted) {
      setIsStarted(true)

      /* if (!isOnboarded) {
        navigate('/onboarding');
      } */
    }
  }, [startParam, isStarted, isOnboarded, setIsStarted])

  return { startParam }
}