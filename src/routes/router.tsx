import { createBrowserRouter} from 'react-router'
import HomePage from '../pages/HomePage'
import RootLayout from '../ui/RootLayout'

export const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout />,
        children: [
            { index:true, element: <HomePage /> }

        ]
    }
])
