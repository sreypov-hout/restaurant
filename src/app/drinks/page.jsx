'use client';
import Drink from "./Drink";

export default function KhmerFoodPage() {
  const dishes = [
    { id: 43, name: "Vital 1.5ml", rating: 5, time: "1 min", price: 0.25, originalPrice: 0.00, image: "/images/drinks/vital.png" },
    { id: 44, name: "Vital 500ml", rating: 5, time: "1 min", price: 0.50, originalPrice: 0.00, image: "/images/drinks/vital-2000.png" },
    { id: 45, name: "Provida 1.5mL", rating: 5, time: "1 min", price: 0.25, originalPrice: 0.00, image: "/images/drinks/Provida-500ml.png" },
    { id: 46, name: "Provida 500ml", rating: 5, time: "1 min", price: 0.50, originalPrice: 0.00, image: "/images/drinks/Provida-1.5mL.png" },
    { id: 47, name: "Green Tea", rating: 4.8, time: "5 min", price: 3.99, originalPrice: 4.99, image: "/images/drinks/green-tea-latte-frappe.png" },
    { id: 48, name: "Red Tea", rating: 5, time: "2 min", price: 5.99, originalPrice: 6.59, image: "/images/drinks/red-tea.png" },
    { id: 49, name: "Coca Cola", rating: 4.5, time: "4 min", price: 2.50, originalPrice: 4.40, image: "/images/drinks/coca cola.png" },
    { id: 50, name: "Coffee Cream", rating: 5.00, time: "5 min", price: 5.99, originalPrice: 6.50, image: "/images/drinks/coffee-creem.png" },
    { id: 51, name: "Lemon Juice", rating: 3.5, time: "3 min", price: 2.99, originalPrice: 4.99, image: "/images/drinks/lemon-juice.png" },
    { id: 52, name: "Orange Juice", rating: 4.6, time: "2 min", price: 3.59, originalPrice: 4.00, image: "/images/drinks/orange-juice.png" },
    { id: 53, name: "Tea", rating: 4.5, time: "5 min", price: 2.99, originalPrice: 4.50, image: "/images/drinks/tea.png" },
    { id: 54, name: "Chocolate Smoothie", rating: 4.5, time: "5 min", price: 2.99, originalPrice: 4.50, image: "/images/drinks/chocolate-smoothie.png" },

  ];

  return <Drink dishes={dishes} />;
}