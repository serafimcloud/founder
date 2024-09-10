import { RouterProvider } from 'react-router-dom'
import { createHashRouter } from 'react-router-dom'

import Home from './pages/Home'


const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Home />,
  },

])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
