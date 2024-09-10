  import type { InitDataUnsafe, ThemeParams } from '@vkruglikov/react-telegram-web-app'

  declare global {
    interface Window {
      Telegram?: {
        WebApp: {
          MainButton: {
            enable: VoidFunction
            disable: VoidFunction
          }
          openInvoice: (url: string, callback?: (status: string) => void) => void
          openTelegramLink: (url: string) => void     
          initData: string
          initDataUnsafe: InitDataUnsafe
          version: string
          platform: string
          colorScheme: 'light' | 'dark'
          themeParams: ThemeParams
          isExpanded: boolean
          viewportHeight: number
          viewportStableHeight: number
          headerColor: string
          backgroundColor: string
          isClosingConfirmationEnabled: boolean
          close: VoidFunction
          ready: VoidFunction
          SettingsButton?: {
            show: VoidFunction
            hide: VoidFunction
            onClick: (callback: VoidFunction) => void
            offClick: (offClick: VoidFunction) => void
          }
          setHeaderColor?: (color: string) => void
          setBackgroundColor?: (color: string) => void
          enableVerticalSwipes: VoidFunction
          disableVerticalSwipes: VoidFunction
          shareToStory: (media_url: string, params?: StoryShareParams) => void
          enableClosingConfirmation: VoidFunction
          disableClosingConfirmation: VoidFunction
        }
      }
    }
  }

  interface StoryShareParams {
    text?: string
    widget_link?: StoryWidgetLink
  }

  interface StoryWidgetLink {
    url: string
    name?: string
  }
