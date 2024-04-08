
import './styles/index.css'
import { createRoot } from 'react-dom/client'
import { App } from '@/components/app/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LazyAbout } from './pages/about/index.lazy'
import { LazyProfile } from './pages/profile/index.lazy'
import { Suspense } from 'react'

const root = document.getElementById('root')

if (!root) {
    throw new Error('root not found')
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App />
        ),
        children: [
            {
                path: '/about',
                element: <Suspense>
                    <LazyAbout />
                </Suspense>
            },
            {
                path: '/profile',
                element: <Suspense>
                    <LazyProfile />
                </Suspense>
            }
        ]
    },
]);

const container = createRoot(root)

container.render(<RouterProvider router={router} />)