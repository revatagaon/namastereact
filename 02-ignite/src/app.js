import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

  const [userName, setUserName] = useState(null)

  useEffect(() => {
    // write Authentication Logic and assume you got the result
    // make an api call
    let data = {
      name: "Praveen Revatagaon"
    }
    setUserName(data.name)
  }, [])

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* It will use Praveen Revatagaon everywhere except Header Component */}
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
        {/* It will use Elon Musk in Header */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <About />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);