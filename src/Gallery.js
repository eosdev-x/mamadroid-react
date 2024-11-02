import React, { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = ['All', 'Streams', 'Events', 'Highlights'];
  
  const galleryImages = [
    {
      id: 1,
      url: "https://1drv.ms/i/s!Amo7Ig2olbdsgYYCyTFVDJZfjYVMNg?embed=1",
      title: "Stream Moment 1",
      category: "streams"
    },
        {
      id: 1,
      url: "https://1drv.ms/i/s!Amo7Ig2olbdsgYYDsv-ePYkEIYvyZw?embed=1",
      title: "Event Moment 1",
      category: "events"
    },
        {
      id: 1,
      url: "https://1drv.ms/i/s!Amo7Ig2olbdsgYYB9Bmk0GxWOVIeXw?embed=1",
      title: "Highlight Moment 1",
      category: "highlights"
    },
    // Add more images with categories
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory.toLowerCase());

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Gallery</h2>
        <nav className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category.toLowerCase())}
              className={`px-4 py-2 rounded-lg ${
                activeCategory === category.toLowerCase()
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-lg font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;