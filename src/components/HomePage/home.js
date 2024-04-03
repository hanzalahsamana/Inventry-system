import React from "react";
import "./style.css";
import ContactSection from "../contactSection";
import Navbar from "../Navbar";
import Header from "../header";
import WorkWithUs from "../workWithUs";
import ServicesSection from "../serviceSection";
import TeamSection from "../teamSection";
import Footer from "../footer";
import '../../../src/App.css';
import '../../../src/css/bootstrap.css';
import '../../../src/css/main.css';
import '../../../src/css/bootstrap.min.css';
import '../../../src/css/font-awesome/css/all.css';
import '../../../src/css/bootstrap-icons/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <WorkWithUs/>
        <TeamSection/>
        <ServicesSection/>
        <ContactSection/>
        <Footer/>
    </div>
  );
};
export default Home;
