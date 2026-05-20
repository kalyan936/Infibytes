import React from "react";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import { RootLayout } from "./layouts/RootLayout";

import { Home } from "./pages/Home";
import { HomeAlternate } from "./pages/HomeAlternate";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Industries } from "./pages/Industries";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="alternate" element={<HomeAlternate />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Industries />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}