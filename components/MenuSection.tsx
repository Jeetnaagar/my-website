
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Appetizers', 'Pasta', 'Entrees', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-lucca-burgundy mb-4">Our Seasonal Menu</h2>
          <div className="h-1 w-20 bg-lucca-gold mx-auto mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Experience traditional Italian cuisine with contemporary flair. Our menu is carefully crafted using only the freshest seasonal ingredients.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-lucca-burgundy text-white shadow-lg' 
                : 'bg-white text-stone-600 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredItems.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-6 group">
              <div className="sm:w-32 sm:h-32 shrink-0 overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif font-bold text-stone-800">{item.name}</h3>
                  <span className="text-lucca-gold font-bold">{item.price}</span>
                </div>
                <p className="text-stone-500 text-sm italic mb-1">{item.category}</p>
                <p className="text-stone-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 border border-stone-200 rounded-2xl bg-white text-center">
          <h3 className="text-2xl font-serif mb-4">Planning a quiet evening at home?</h3>
          <p className="text-stone-600 mb-6">Our takeout menu is available Wed-Sun from 5:00 PM to 8:00 PM.</p>
          <a 
            href="tel:4064578311"
            className="inline-block px-8 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors"
          >
            Order Takeout: 406-457-8311
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
