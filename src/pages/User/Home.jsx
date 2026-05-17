import React from "react";
import Hero from "../../components/User/Home/Hero";
import BestSellers from "../../components/User/Home/BestSellers";
import MainLayout from "../../components/User/Layouts/MainLayout";
// import MainLayout from "../../components/User/layouts/MainLayout";
// import Hero from "../components/home/Hero";
// import BestSellers from "../components/home/BestSellers";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <BestSellers />
      {/* Add other sections here:
        <CategoryShowcase />
        <LuxuryBanner />
        <Testimonials />
        <Newsletter /> 
      */}
    </MainLayout>
  );
};

export default Home;
