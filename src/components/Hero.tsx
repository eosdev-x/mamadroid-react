import { Twitch, Youtube, Twitter, Instagram } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-black/95 z-10" />
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f')] 
        bg-cover bg-center opacity-40"
      />
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-4xl">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 animate-gradient">
            MAMADROID
          </h1>
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            Gamer, Streamer, & Content Creator
          </p>
          <div className="flex gap-4 mb-12">
            <a href="https://www.twitch.tv/mamadroidtv" className="social-icon-btn">
              <Twitch className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/@mamadroidtv" className="social-icon-btn">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://x.com/JaquelaJ91657" className="social-icon-btn">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://discord.gg/mamadroid" className="social-icon-btn">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <a 
            href="https://www.twitch.tv/mamadroidtv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg 
              font-semibold text-lg hover:scale-105 transition-transform duration-300 ease-out 
              hover:shadow-lg hover:shadow-purple-500/25"
          >
            Watch Live
          </a>
        </div>
      </div>
    </div>
  );
}