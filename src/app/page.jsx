'use client'
import React, { useState } from 'react';
import Banner from "@/components/landing/banner";
import PopularDishes from "@/components/landing/popularDishes";
import BestOffer from '@/components/landing/foodOfferGrid';
import Testimonial from '@/components/landing/testimonial';

export default function Home() {
    // const [cartCount, setCartCount] = useState(1);

  const popularDishes = [
    {
      id: 1,
      name: 'Mediterranean Bowl',
      price: 15.0,
      originalPrice: 18.0,
      image: '/images/ti1.png',
      rating: 4.8,
      time: '15-20 min',
    },
    {
      id: 2,
      name: 'Spicy Salmon',
      price: 22.0,
      originalPrice: 25.0,
      image: '/images/ti2.png',
      rating: 4.9,
      time: '20-25 min',
    },
    {
      id: 3,
      name: 'Pasta Primavera',
      price: 18.0,
      originalPrice: 20.0,
      image: '/images/ti3.png',
      rating: 4.7,
      time: '12-18 min',
    },
    {
      id: 4,
      name: 'Beef Teriyaki',
      price: 24.0,
      originalPrice: 28.0,
      image: '/images/ti4.png',
      rating: 4.8,
      time: '25-30 min',
    },
  ];

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <Banner />
      <PopularDishes dishes={popularDishes} />
      <BestOffer />
     <Testimonial />
    </>
  );
}
