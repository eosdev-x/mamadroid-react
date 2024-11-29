import { Clock, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">About Mamadroid</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Welcome to my site! I'm a passionate gamer who loves to entertain and interact with my audience.
              I stream a variety of content including Valorant, COD, and LOL.
              Join me for exciting gameplay, fun challenges, and great conversation!
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">5000+</div>
                <div className="text-sm text-gray-400">Hours Live</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">250K</div>
                <div className="text-sm text-gray-400">Followers</div>
              </div>
              <div className="text-center">
                <Trophy className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15</div>
                <div className="text-sm text-gray-400">Tournaments</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1561883088-039e53143d73" 
                alt="Mamadroid" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-600 to-pink-600 w-32 h-32 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}