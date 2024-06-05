import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    }
])

export const App = () => {
    return (
        <RouterProvider router={router} />
    );
}