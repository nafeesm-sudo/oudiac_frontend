import React from "react";
import Navbar from "./Navbar";
// import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-zinc-100 font-sans selection:bg-amber-600/30">
      <Navbar />
      <main className="pt-0">
        {" "}
        {/* PT-0 because Hero goes under transparent navbar */}
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
