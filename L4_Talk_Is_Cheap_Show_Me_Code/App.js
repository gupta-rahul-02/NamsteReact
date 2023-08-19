import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import {Body} from "./src/component/Body"
import Footer from "./src/component/Footer";
import About from "./src/component/About"
import Contact  from "./src/component/Contact"
import Error  from "./src/component/Error";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import RestrauntMenu from "./src/component/RestrauntMenu";
import Cart from "./src/component/Cart"
import Signup from "./src/component/Signnup";
import Profile from "./src/component/Profile";
const AppLayout = () => {
  return (
    <>
      <Header />
      {/* <Signup></Signup> */}
      <Outlet/>
      <Footer/>
</>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>,
        children:[   //nested routing
          {
            path:"profile", // path :- localhost:1234/about/profile
            element:<Profile/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path:"/restaurant/:resId",
        element: <RestrauntMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
