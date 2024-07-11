import React from "react";
import { Suspense } from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Loader } from '@react-three/drei'
import { createRoot } from 'react-dom/client'
import ThreedMenu from "./Components/threedMenu";
// import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"));
root.render(
  <>
 {/*  <React.StrictMode>*/}
    <App />
    <Suspense fallback={null}>
      <hreedMenu/>
    </Suspense>
    <Loader />
  
 {/* </React.StrictMode> */}
  </>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
