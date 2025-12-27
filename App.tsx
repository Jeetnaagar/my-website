
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import ChatAssistant from './components/ChatAssistant';
import ReservationSystem from './components/ReservationSystem';
import { BUSINESS_INFO } from './constants';
import { MapPin, Phone, Clock, Award, Mail } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Accolades Section */}
        <div className="bg-stone-100 py-12 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 text-stone-500">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-lucca-gold" />
              <span className="font-serif italic">Best Restaurant in Montana 2015</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-lucca-gold" />
              <span className="font-serif italic">Best Restaurant in Montana 2016</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-lucca-gold" />
              <span className="font-serif italic">Best Restaurant in Montana 2017</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-lucca-gold font-bold tracking-widest uppercase text-xs mb-4 block">The Experience</span>
                <h2 className="text-4xl md:text-5xl font-serif text-lucca-burgundy mb-8">Relaxed Elegance & Sophistication</h2>
                <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                  <p>
                    Lucca's brings the heart of Italy to Helena. Our philosophy centers on traditional Italian techniques paired with the finest ingredients available. From our house-made pastas to our hand-selected wine list, every detail is designed to tantalize the senses.
                  </p>
                  <p>
                    With only 54 seats, our dining room offers an intimate atmosphere that is refined yet relaxed—capturing the essence of Montana sophistication without the formal pomp and circumstance.
                  </p>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6">
                   <div className="border-l-4 border-lucca-gold pl-4">
                      <h4 className="font-bold text-stone-800">Authentic</h4>
                      <p className="text-sm">House-made pastas & sauces</p>
                   </div>
                   <div className="border-l-4 border-lucca-gold pl-4">
                      <h4 className="font-bold text-stone-800">Fresh</h4>
                      <p className="text-sm">Locally sourced & seasonal</p>
                   </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1000" 
                  alt="Lucca's Pasta" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-lucca-gold rounded-2xl z-0" />
              </div>
            </div>
          </div>
        </section>

        <MenuSection />

        {/* Reservations & Gifts CTA */}
        <section id="gifts" className="bg-lucca-burgundy py-24 text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-20">
              <div className="space-y-8">
                <h2 className="text-4xl font-serif">Gift Certificates</h2>
                <p className="text-stone-300 text-lg">
                  The perfect experiential present. Suited for any recipient, our elegant gift certificates can be purchased online or in person. We also offer mailing services for your convenience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3 bg-white text-lucca-burgundy font-bold rounded-full hover:bg-stone-100 transition-colors">
                    Buy Online
                  </button>
                  <button className="px-8 py-3 bg-transparent border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                    Inquire by Phone
                  </button>
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-serif">Join Our Team</h2>
                <p className="text-stone-300 text-lg">
                  We are currently hiring for a <span className="text-white font-bold">Line Chef</span>. Join our culinary team and help us deliver Montana's best dining experience. Training offered.
                </p>
                <div className="flex items-center gap-2 text-lucca-gold">
                  <Mail className="w-5 h-5" />
                  <a href={`mailto:${BUSINESS_INFO.hiringEmail}`} className="underline font-medium hover:text-white transition-colors">
                    {BUSINESS_INFO.hiringEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Reservation Section */}
        <section id="contact" className="py-24 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2 space-y-10">
                <h2 className="text-4xl font-serif text-lucca-burgundy">Plan Your Visit</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <MapPin className="w-6 h-6 text-lucca-gold shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800">Location</h4>
                      <p className="text-stone-600">{BUSINESS_INFO.address}</p>
                      <p className="text-sm text-stone-500 mt-2 italic">{BUSINESS_INFO.locationDescription}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Phone className="w-6 h-6 text-lucca-gold shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800">Call Us</h4>
                      <p className="text-stone-600 font-bold text-xl">{BUSINESS_INFO.phone}</p>
                      <p className="text-sm text-stone-500 mt-1">Recommended for parties larger than 8.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-full shadow-sm">
                      <Clock className="w-6 h-6 text-lucca-gold shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800">Hours</h4>
                      <p className="text-stone-600">{BUSINESS_INFO.hours}</p>
                      <p className="text-stone-600 text-sm italic">Wednesday through Sunday</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <ReservationSystem />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900 py-12 text-stone-400">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif text-white mb-6">Lucca's Fine Italian</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#menu" className="hover:text-white">Menu</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#gifts" className="hover:text-white">Gifts</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Lucca's Fine Italian Restaurant. Helena, Montana.</p>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
};

export default App;
