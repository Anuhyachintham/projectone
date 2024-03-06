import React, { children } from "react";
import  ReactDOM  from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ContactUs from "./Components/Contact";
import AboutUs from "./Components/About";
import Error from "./Components/Error";
import Services from "./Components/Services";
import "./index.css"
import Resturantmenu from "./Components/Resturantmenu";

const App=()=>{

    return(<div>

<Header/>
<Outlet/>



    </div>)
}

const appRouter=createBrowserRouter([
    {
    path:"/",
    element:<App/>,

    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/About",
            element:<AboutUs/>

        },
        {
            path:"/Contact",
            element:<ContactUs/>
        },
        {
        path:"/Services",
        element:<Services/>
        },
        {
            path:"/restaurant/:id",

            
            element:<Resturantmenu/>
        }

    ],

errorElement:<Error/>

},



])


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>);
//root.render(<App/>)

export default App;