import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {
    createBrowserRouter,
    // createRouterFromElements,
    // Route,
    RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Orders from './Pages/Orders';
import Transaction from './Pages/Transaction';
import Requests from './Pages/Requests';

import ProfileForm from './Pages/ProfileForm';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/orders',
        element: <Orders />,
    },
    {
        path: '/transaction',
        element: <Transaction />,
    },
    {
        path: '/requests',
        element: <Requests />,
    },

    {
        path: '/profileform',
        element: <ProfileForm />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <RouterProvider router={router} />,
    // </React.StrictMode>,
);

{
    /* navbar navbar-expand-lg bg-body-tertiary flex item-center justify-between w-full h-16 py-2 text-black border-b px-28 mb-36 border-cyan-400  border border-primary  fixed-top */
}
{
    /* navbar navbar-expand-lg bg-body-tertiary */
}
