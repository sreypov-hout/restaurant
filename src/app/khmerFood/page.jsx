'use client';
import KhmerFood from './KhmerFood';

export default function KhmerFoodPage() {
  const dishes = [
    { id: 1, name: "Fish Amok", rating: 4.8, time: "30 min", price: 5.99, originalPrice: 7.99, image: "/images/khmerfood/fish amok.png" },
    { id: 2, name: "Chicken soup", rating: 4.6, time: "25 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/chicken-soup.png" },
    { id: 3, name: "Machu Krerng Sachmorn", rating: 3.5, time: "15 min", price: 2.99, originalPrice: 4.90, image: "/images/khmerfood/machu-krerng-sachmorn.png" },
    { id: 4, name: "Morakot Soup", rating: 4.5, time: "30 min", price: 5.99, originalPrice: 6.99, image: "/images/khmerfood/morakot-soup.png" },
    { id: 5, name: "Pleah Sachko", rating: 5, time: "16 min", price: 5.50, originalPrice: 6.99, image: "/images/khmerfood/pleah-sachko.png" },
    { id: 6, name: "Rice Noodles with Curry Paste", rating: 4.6, time: "20 min", price: 4.99, originalPrice: 6.99, image: "/images/khmerfood/rice-noodles-bowl-curry-paste.png" },
    { id: 7, name: "Carrot soup", rating: 4.5, time: "17 min", price: 4.50, originalPrice: 6.99, image: "/images/khmerfood/sdek-kur.png" },
    { id: 8, name: "Rice Noodles with Pork", rating: 4.6, time: "14 min", price: 3.70, originalPrice: 6.99, image: "/images/khmerfood/slo-khmer.png" },
    { id: 9, name: "Grilled Steak with Salad", rating: 3.8, time: "20 min", price: 4.50, originalPrice: 6.99, image: "/images/khmerfood/ot-skol.png" },
    { id: 10, name: "Rice with Fried Egg", rating: 4.2, time: "24 min", price: 2.75, originalPrice: 6.99, image: "/images/khmerfood/rice-fries.png" },
    { id: 11, name: "Tongyam", rating: 3.6, time: "10 min", price: 6.50, originalPrice: 8.99, image: "/images/khmerfood/tongyam.png" },
    { id: 12, name: "Machu Nornong", rating: 4.6, time: "19 min", price: 5.99, originalPrice: 6.99, image: "/images/khmerfood/machu nornong.png" },
    { id: 13, name: "Khmer curry", rating: 4.6, time: "18 min", price: 3.99, originalPrice: 6.99, image: "/images/khmerfood/carry.png" },
    { id: 14, name: "Fried rice with egg", rating: 4.5, time: "25 min", price: 4.50, originalPrice: 6.99, image: "/images/khmerfood/chhar chu eam.png" },
  ];

  return <KhmerFood dishes={dishes} />;
}