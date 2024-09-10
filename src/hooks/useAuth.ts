import { useInitData } from '@vkruglikov/react-telegram-web-app'
import { usePersistStore } from './useStore'
import { TWebAuthData } from '../types'

const AUTH: undefined | string = import.meta.env.VITE_AUTH
const USER_ID: undefined | string = import.meta.env.VITE_USER_ID
const USERNAME: undefined | string = import.meta.env.VITE_USERNAME
console.log('AUTH', AUTH)
console.log('USER_ID', USER_ID)
console.log('USERNAME', USERNAME)

export const stringFromWebAuthData = (data: TWebAuthData): string => {
  return Object.entries(data).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&')
}

export const useAuth = () => {
  const { webAuthData } = usePersistStore()
  const [initDataUnsafe, initData] = useInitData()

  const authString: string =
    webAuthData && stringFromWebAuthData(webAuthData) ||
    initData ||
    AUTH ||
    ''

  const isAuth = !!authString

  const userId: number | undefined =
    webAuthData?.id ||
    initDataUnsafe?.user?.id ||
    (USER_ID ? parseInt(USER_ID) : undefined)

  const username: string | undefined =
    webAuthData?.username ||
    initDataUnsafe?.user?.username ||
    USERNAME

  const photoUrl: string | undefined =
    webAuthData?.photo_url ||
    // initDataUnsafe?.user?.photo_url // lack of types in the lib
    (typeof window.Telegram?.WebApp.initDataUnsafe.user?.photo_url === 'string' ? window.Telegram?.WebApp.initDataUnsafe.user?.photo_url : undefined)

  const firstName: string | undefined =
    webAuthData?.first_name ||
    initDataUnsafe?.user?.first_name ||
    undefined

  const lastName: string | undefined =
    webAuthData?.last_name ||
    initDataUnsafe?.user?.last_name ||
    undefined

  return { isAuth, authString, userId, username, photoUrl, firstName, lastName }
}
