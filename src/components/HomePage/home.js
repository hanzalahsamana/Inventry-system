import React from "react";
import "./style.css";
import ContactSection from "../contactSection";
import Navbar from "../Navbar";
import Header from "../header";
import WorkWithUs from "../workWithUs";
import ServicesSection from "../serviceSection";
import TeamSection from "../teamSection";
import Footer from "../footer";
import 'aos/dist/aos.css';
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <WorkWithUs/>
        <TeamSection/>
        <Footer/>
    </div>
  );
};
export default Home;
