import React, { useState, useEffect } from 'react';
import { Twitter, Twitch, Youtube, Instagram, MessageCircle } from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://1drv.ms/i/s!Amo7Ig2olbdsgYYCyTFVDJZfjYVMNg?embed=1&width=800&height=600",
    "https://1drv.ms/i/s!Amo7Ig2olbdsgYYDsv-ePYkEIYvyZw?embed=1&width=800&height=600",
    "https://1drv.ms/i/s!Amo7Ig2olbdsgYYB9Bmk0GxWOVIeXw?embed=1&width=800&height=600"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 shadow-md rounded-lg mt-6 mx-6">
        <h1 className="text-4xl font-bold">mamadroid</h1>
      </header>
      
      <main className="container mx-auto mt-8 flex-grow px-6">
        {/* Image Slider */}
        <div className="relative h-[600px] mb-8 rounded-lg shadow-md overflow-hidden">
          {slides.map((slide, index) => (
            <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
              <img src={slide} alt={`Stream Highlight ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* About Section */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            Welcome to my stream! I'm a passionate gamer who loves to entertain and interact with my audience.
            I stream a variety of content including Valorant, COD, and LOL.
            Join me for exciting gameplay, fun challenges, and great conversation!
          </p>
        </section>

        {/* Social Links */}
        <section className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Connect With Me</h2>
          <div className="flex space-x-4 justify-center">
            <a href="https://www.twitch.tv/mamadroidtv" className="text-3xl text-purple-600 hover:text-purple-800">
              <Twitch size={32} />
            </a>
            <a href="https://x.com/JaquelaJ91657" className="text-3xl text-blue-600 hover:text-blue-800">
              <Twitter size={32} />
            </a>
            <a href="#" className="text-3xl text-red-600 hover:text-red-800">
              <Youtube size={32} />
            </a>
            <a href="#" className="text-3xl text-pink-600 hover:text-pink-800">
              <Instagram size={32} />
            </a>
            <a href="https://discord.com/users/mamdroid#8216" className="text-3xl text-blue-800 hover:text-blue-900">
              <MessageCircle size={32} />
            </a>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>&copy; 2024 Mama-Droid. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;