import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden">
      <Navbar />

      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};