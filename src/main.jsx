import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Route1 from './Routes.jsx'
import { Route2 } from "./Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <BrowserRouter>
      <App />
      <Routes>
        {
            Route1.map((v) => {
                return <Route path={v.path} element={v.element}/>
            })
        }
        
        {/* <Route path="/" element={<Body />} />
        <Route path="/crud" element={<CrudPage />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
);
