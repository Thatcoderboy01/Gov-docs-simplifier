import React from 'react';
import backgroundImage from '../assets/russia-1698992939.jpg';

function Hero() {
  return (
    <section
      className="relative mt-16 py-24 px-6 text-white bg-cover bg-center font-alegreya"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Simplify Your Documents with Ease
        </h1>
        <p className="text-lg sm:text-xl font-light mb-8">
          Convert, organize, and simplify your documents with just a few clicks. Experience seamless document processing today!
        </p>
        <a
          href="#features"
          className="inline-block bg-yellow-400 text-black py-3 px-8 rounded-full text-lg font-medium shadow-lg hover:bg-yellow-300 transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;
