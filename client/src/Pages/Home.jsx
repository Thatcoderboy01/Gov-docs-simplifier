// src/App.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import UploadSection from '../components/UploadSection';
import FilesUploaded from '../components/FilesUploaded';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/Contact';
import ChatBot from '../components/ChatBot';
import FAQs from '../components/FAQ';

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ChatBot />
      <UploadSection />
      <FilesUploaded />
      <Features />
      <Services />
      <AboutUs/>
      <FAQs />
      <ContactUs/>
    
      <Footer />
      
    </div>
  );
};

export default Home;
