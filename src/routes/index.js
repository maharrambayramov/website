import Mainroot from "../Pages/Mainroot"
import Home from "../Pages/Home"
import ProductsPost from "../Pages/ProductsPost"
export const ROUTES = [
    {
        path: "",
        element: <Mainroot />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/ProductsPost",
                element: <ProductsPost />
            }
        ]
    },
]