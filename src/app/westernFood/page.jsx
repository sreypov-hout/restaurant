'use client';
import WesternFood from './WesternFood';

export default function KhmerFoodPage() {
  const dishes = [
    { id: 15, name: "Beef Patties", rating: 4.8, time: "30 min", price: 5.99, originalPrice: 7.99, image: "/images/westernfood/beef-patties.png" },
    { id: 16, name: "Beef with Mashed Potatoes", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/beef-with-mashed-potatoes.png" },
    { id: 17, name: "Bread Butter Chicken Grill", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/bread-butter-chicken-grill.png" },
    { id: 18, name: "Chicken Steak with Vegetables", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/chicken-steak-vegetables.png" },
    { id: 19, name: "Chicken Steak", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/chicken-steak.png" },
    { id: 20, name: "Chicken Wings", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/chicken-wings.png" },
    { id: 21, name: "Creamy Mashed Potatoes", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/creamy-mashed-potatoes-chicken.png" },
    { id: 22, name: "Pork Ribs", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/pork-ribs.png" },
    { id: 23, name: "Spaghetti", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/spaghetti.png" },
    { id: 24, name: "Steak with Potatoes and Fries", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/steak-with-potatoes-fries.png" },
    { id: 25, name: "Steak", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/steak.png" },
    { id: 26, name: "Tacos", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/tacos.png" },
    { id: 27, name: "Avocado Sandwich", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/avocado-sandwich.png" },
    { id: 28, name: "Spinach Sandwich", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/westernfood/spinach-sandwich.png" },
  ];

  return <WesternFood dishes={dishes} />;
}