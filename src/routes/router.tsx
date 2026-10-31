import { createBrowserRouter} from 'react-router'
import HomePage from '../pages/HomePage'
import RootLayout from '../ui/RootLayout'
import RegisterPage from '../auth/pages/RegisterPage'
import LoginPage from '../auth/pages/LoginPage'

export const router = createBrowserRouter([
    {path: '/login', element: <LoginPage/>},
    { path: '/register', element: <RegisterPage/> },
    {
        path: '/', element: <RootLayout />,
        children: [
            { index:true, element: <HomePage /> }

        ]
    }
])
