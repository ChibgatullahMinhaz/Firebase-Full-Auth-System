import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto min-h-screen flex flex-col justify-between">
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-600">
            © 2025 Firebase Auth System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
