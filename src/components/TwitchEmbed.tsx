import { Play } from 'lucide-react';

export default function TwitchEmbed() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc')] 
        bg-cover bg-center opacity-10 blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              LIVE STREAM
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Join the action live! Watch intense gameplay, interact with the community, 
              and be part of epic moments that make streaming history.
            </p>
            <a 
              href="https://www.twitch.tv/mamadroidtv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 
                p-1 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-2 bg-black/90 text-white px-6 py-2 rounded-md">
                <Play className="w-5 h-5 text-purple-400" />
                <span>Watch Live</span>
              </div>
            </a>
          </div>
          
          <div className="lg:w-2/3">
            <div className="relative aspect-video rounded-lg overflow-hidden 
              shadow-[0_0_50px_rgba(147,51,234,0.3)] hover:shadow-[0_0_70px_rgba(147,51,234,0.4)] 
              transition-shadow duration-300">
              <iframe
                src="https://player.twitch.tv/?channel=mamadroidtv&parent=mamadroid.com&autoplay=false"
                frameBorder="0"
                allowFullScreen={true}
                scrolling="no"
                height="100%"
                width="100%"
                className="absolute inset-0"
                title="Twitch Stream"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}