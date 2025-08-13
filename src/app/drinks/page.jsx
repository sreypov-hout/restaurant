'use client';
import Drink from "./Drink";

export default function KhmerFoodPage() {
  const dishes = [
    { id: 43, name: "Green Tea", rating: 4.8, time: "30 min", price: 3.99, originalPrice: 4.99, image: "/images/drinks/green-tea-latte-frappe.png" },
    { id: 44, name: "Red Tea", rating: 5, time: "25 min", price: 5.99, originalPrice: 6.59, image: "/images/drinks/red-tea.png" },
    { id: 45, name: "Coca Cola", rating: 4.5, time: "25 min", price: 2.50, originalPrice: 4.40, image: "/images/drinks/coca cola.png" },
    { id: 46, name: "Coffee Cream", rating: 5.00, time: "25 min", price: 5.99, originalPrice: 6.50, image: "/images/drinks/coffee-creem.png" },
    { id: 47, name: "Lemon Juice", rating: 3.5, time: "25 min", price: 2.99, originalPrice: 4.99, image: "/images/drinks/lemon-juice.png" },
    { id: 48, name: "Orange Juice", rating: 4.6, time: "25 min", price: 3.59, originalPrice: 4.00, image: "/images/drinks/orange-juice.png" },
    { id: 49, name: "Tea", rating: 4.5, time: "25 min", price: 2.99, originalPrice: 4.50, image: "/images/drinks/tea.png" },
    { id: 50, name: "Chocolate Smoothie", rating: 4.5, time: "25 min", price: 2.99, originalPrice: 4.50, image: "/images/drinks/chocolate-smoothie.png" },

  ];

  return <Drink dishes={dishes} />;
}