import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import BoardGameCollection from "./pages/BoardGameCollection";
import Reservations from "./pages/Reservations";
import Schedule from "./pages/Schedule";
import Feedback from "./pages/Feedback";
import Menu from "./pages/Menu";
import News from "./pages/News";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="boardgames" element={<BoardGameCollection />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="menu" element={<Menu />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="news" element={<News />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
