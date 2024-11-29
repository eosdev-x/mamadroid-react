import { ChevronLeft, ChevronRight } from 'lucide-react';

const featuredContent = [
  {
    title: "Epic 1v5 Clutch",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
    views: "126K"
  },
  {
    title: "New World Record!",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    views: "89K"
  },
  {
    title: "Community Event",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033",
    views: "234K"
  }
];

export default function Featured() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">Featured Content</h2>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x">
            {featuredContent.map((content, index) => (
              <div 
                key={index}
                className="min-w-[300px] md:min-w-[400px] group cursor-pointer snap-start"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    className="w-full h-[225px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4">
                      <h3 className="text-xl font-bold text-white mb-2">{content.title}</h3>
                      <p className="text-purple-400">{content.views} views</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}