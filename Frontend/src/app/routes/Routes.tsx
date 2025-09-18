import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layouts/App";
import HomePage from "../../features/home/HomePage ";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import About from "../../features/about/About";
import ContactPage from "../../features/contact/ContactPage";
import NotFound from "../error/NotFound";
import ServerError from "../error/ServerError";
import CartPage from "../../features/cart/CartPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: '/catalog', element: <Catalog />},
            {path: '/catalog/:id', element: <ProductDetails />},
            {path: '/cart', element: <CartPage />},
            {path: '/about', element: <About />},
            {path: '/contact', element: <ContactPage />},
            {path: '/checkout', element: <CheckoutPage />},
            {path: '/server-error', element: <ServerError />},
            {path: '/not-found', element: <NotFound />},
            {path: '*', element: <Navigate replace to='/not-found' />},
            
        ]
    }
])