"use client";
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribing email:', email);
    // Handle subscription logic here
    setEmail('');
  };

  return (
    <footer className="relative bg-gray-50 pt-16 pb-8 " style={{ backgroundImage: 'url(/images/tterm.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

      {/* Decorative food illustrations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left side illustrations */}
        <div className="absolute left-0 top-8">
          {/* <svg width="200" height="200" viewBox="0 0 200 200" className="text-gray-300 opacity-60">
           
            <path d="M20 180 L80 40 L140 180 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="45" cy="120" r="3" fill="currentColor"/>
            <circle cx="70" cy="110" r="4" fill="currentColor"/>
            <circle cx="90" cy="140" r="3" fill="currentColor"/>
          </svg> */}
        </div>

        {/* Right side illustrations */}
        <div className="absolute right-0 top-16">
          {/* <svg width="180" height="180" viewBox="0 0 180 180" className="text-gray-300 opacity-60">
            Mushroom illustration
            <ellipse cx="90" cy="60" rx="40" ry="25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <rect x="85" y="60" width="10" height="30" fill="none" stroke="currentColor" strokeWidth="2"/>
            Tomato slice
            <circle cx="120" cy="120" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 120 Q110 110 120 120 Q130 110 140 120" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg> */}
          <img src="/images/logo/pizza.png" className='w-20 opacity-50 animate-bounce' alt="pizza"  style={{ animationDelay: '0.5s' }} />
          <img src="/images/logo/domlong.png" className='w-20 opacity-50 mt-5 right-20 absolute animate-pulse' alt="kator" />
        </div>
      </div>

      {/* Wheat/grain illustration */}
        <div className="absolute right-[20px] bottom-32">
          <svg width="60" height="120" viewBox="0 0 60 120" className="text-yellow-400 opacity-40">
            <path d="M30 10 Q20 30 30 50 Q40 70 30 90 Q20 110 30 120" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M25 20 Q15 25 25 35" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M35 25 Q45 30 35 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Pizza Hut Info */}
          <div className="bg-green-800 text-white p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">pizza hut</h3>
            <p className="text-sm mb-4 text-red-100">PIZZA AND TAKEAWAY</p>
            
            <div className="mb-4">
              <p className="text-sm font-semibold mb-1">Tuesday - Saturday: 12:00pm - 9:30pm</p>
              <p className="text-sm text-red-100">Closed on Sunday</p>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-400">★★★★★</span>
              <span>5 star rated on TripAdvisor</span>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center">
                  <span className="mr-2">›</span>
                  Fredoka One
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center">
                  <span className="mr-2">›</span>
                  Special Dish
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center">
                  <span className="mr-2">›</span>
                  Reservation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center">
                  <span className="mr-2">›</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Menu</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center">
                  <span className="mr-2">›</span>
                  Steaks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center">
                  <span className="mr-2">›</span>
                  Burgers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center">
                  <span className="mr-2">›</span>
                  Cocktails
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center">
                  <span className="mr-2">›</span>
                  Bar B Q
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors flex items-center">
                  <span className="mr-2">›</span>
                  Desserts
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Get recent news and updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="w-full bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Yellow divider line */}
        <div className="w-full h-1 bg-yellow-400 mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            <span className="text-red-500">© 2024 pizza hut</span> | All shawtheme13 Themes
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-600 hover:text-red-500 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}