"use client";
import React, { useEffect, useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ cartCount, searchQuery, setSearchQuery }) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <nav className="bg-white sticky top-0 z-50 px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo - Server Side */}
          <div className="flex items-center space-x-2">
            <div className="w-[80px] h-[80px] bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Navigation Links - Server Side */}
          <div className="hidden md:flex items-center space-x-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>

          {/* Search + Cart - Server Side */}
          <div className="flex items-center space-x-4">
            <div className="hidden w-[250px] h-10 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </nav>
    );
  }

  // Client Side Render
  return (
    <nav className="bg-white sticky top-0 z-50 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img className="w-[80px]" src="/images/logo/KitchenBot.png" alt="Logo" />
          <span className="text-3xl font-bold text-green-800">KitchenBot</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={`${pathname === "/" ? "text-green-800" : "text-black/80 hover:text-green-800"} font-medium transition-colors`}>Home</Link>
          <Link href="/khmerFood" className={`${pathname === "/khmerFood" ? "text-green-800" : "text-black/80 hover:text-green-800"} font-medium transition-colors`}>Khmer Food</Link>
          <Link href="/westernFood" className={`${pathname === "/westernFood" ? "text-green-800" : "text-black/80 hover:text-green-800"} font-medium transition-colors`}>Western Food</Link>
          <Link href="/snacks" className={`${pathname === "/snacks" ? "text-green-800" : "text-black/80 hover:text-green-800"} font-medium transition-colors`}>Snacks</Link>
          <Link href="/drinks" className={`${pathname === "/drinks" ? "text-green-800" : "text-black/80 hover:text-green-800"} font-medium transition-colors`}>Drinks</Link>
        </div>

        {/* Search + Cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden w-[250px] sm:flex items-center bg-black/10 rounded-full px-4 py-2">
            <Search className="w-4 h-4 text-gray-80 mr-2" />
            <input
              type="text"
              placeholder="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-black placeholder-black/60 text-sm outline-none w-full"
            />
          </div>
          <Link href="/cart">

            <button className="relative bg-black/10 p-2 rounded-full hover:bg-black/30 transition-colors">
              <ShoppingCart className="w-5 h-5 text-black" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}

            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}