'use client';
import KhmerFood from './KhmerFood';

export default function KhmerFoodPage() {
  const dishes = [
    { id: 1, name: "Fish Amok", rating: 4.8, time: "30 min", price: 5.99, originalPrice: 7.99, image: "/images/khmerfood/new.png" },
    { id: 2, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/kary.png" },
    { id: 3, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/mju.png" },
    { id: 4, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/num-pjok.png" },
    { id: 5, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/ot-skol.png" },
    { id: 6, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/ey-te.png" },
    { id: 7, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/phok.png" },
    { id: 8, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/sajko.png" },
    { id: 9, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/sajmon.png" },
    { id: 10, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/sdek-kur.png" },
    { id: 11, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/slo-khmer.png" },
    { id: 12, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/trop.png" },
    { id: 13, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/seang.png" },
    { id: 14, name: "Khmer Curry", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/baypongtea.png" },
  ];

  return <KhmerFood dishes={dishes} />;
}