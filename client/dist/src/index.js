import { jsx as _jsx } from "react/jsx-runtime";
import './styles/index.css';
import { createRoot } from 'react-dom/client';
import { App } from '@/components/app/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LazyAbout } from './pages/about/index.lazy';
import { LazyProfile } from './pages/profile/index.lazy';
import { Suspense } from 'react';
var root = document.getElementById('root');
if (!root) {
    throw new Error('root not found');
}
var router = createBrowserRouter([
    {
        path: "/",
        element: (_jsx(App, {})),
        children: [
            {
                path: '/about',
                element: _jsx(Suspense, { children: _jsx(LazyAbout, {}) })
            },
            {
                path: '/profile',
                element: _jsx(Suspense, { children: _jsx(LazyProfile, {}) })
            }
        ]
    },
]);
var container = createRoot(root);
container.render(_jsx(RouterProvider, { router: router }));
