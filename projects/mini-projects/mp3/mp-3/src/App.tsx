import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';

const router = createBrowserRouter([
    {
        path: '*',
        Component: Root,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
