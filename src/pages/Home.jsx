import React from "react"
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BestSellers from "../components/BestSellers";
import MenFragrances from "../components/MenFragrances";
import CartSidebar from "../components/CartSidebar";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import Toast from "../components/Toast";

const Home = () =>{
   return (
     <>
      <Navbar/>
      <HeroSection/>
      <BestSellers/>
      <MenFragrances/>
      <CartSidebar/>
       <ProductModal/>
       <Toast/>
      <Footer/>

    </>
   );
} 
export default Home