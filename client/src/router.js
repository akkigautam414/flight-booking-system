import {createBrowserRouter} from "react-router-dom"
import Register from "./Components/Register"
import Login from "./Components/Login";


const router=createBrowserRouter(
    [
        {
          path:"/register",
          element:<Register/>  
        },

        {
            path:"/login",
            element:<Login/>
        }
    ]
)

export default router;   

