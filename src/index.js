
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
      <ThreedMenu/>
    </Suspense>
    <Loader />
  
 {/* </React.StrictMode> */}
  </>
);

