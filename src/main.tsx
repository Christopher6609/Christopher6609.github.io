import { RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.tsx";
import "./index.css";
import router from "./router"

//const router = createBrowserRouter([{ path: "/", element: <div>HEllo</div> }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}

<RouterProvider router={router}/>

  </React.StrictMode>
);
