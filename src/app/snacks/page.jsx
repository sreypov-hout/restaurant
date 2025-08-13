'use client';
import Snack from "./Snack";

export default function SnackPage() {
  const dishes = [
    { id: 29, name: "Almond", rating: 4.8, time: "30 min", price: 5.99, originalPrice: 7.99, image: "/images/snacks/almon.png" },
    { id: 30, name: "Cinnamon Roll", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/snacks/cinnamon-roll.png" },
    { id: 31, name: "Cookies", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/snacks/cookies.png" },
    { id: 32, name: "Croissant", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/snacks/croissant.png" },
    { id: 33, name: "French Fries", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/snacks/french-fries.png" },
    { id: 34, name: "Potatoes", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/snacks/potatoes.png" },
    { id: 35, name: "Seafood Pizza", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/snacks/seafood-pizza.png" },
    { id: 36, name: "Vegetable Supreme Pizza", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/snacks/vegetable-supreme-pizza.png" },
    { id: 37, name: "Bread with Fruit", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/snacks/bread-with-fruite.png" },
  ];

  return <Snack dishes={dishes} />;
}