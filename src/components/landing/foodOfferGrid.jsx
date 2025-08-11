import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

const offers = [
  { id: 1, name: "PASTA", price: 20, oldPrice: 26, discount: 23, rating: 1, img: "/images/bestOffer/pasta.png" },
  { id: 2, name: "Butter Chicken", price: 18, rating: 0, img: "/images/bestOffer/butter-chicken.png" },
  { id: 3, name: "Biryani", price: 11, oldPrice: 12.5, discount: 12, rating: 0, img: "/images/bestOffer/biryani.png" },
  { id: 4, name: "BBQ, Chicken & Pork", price: 15, oldPrice: 19, discount: 21, rating: 0, img: "/images/bestOffer/bbq.png", countdown: { days: 266, hours: 4, mins: 56, secs: 28 } },
  { id: 5, name: "Nuggets Recipe", price: 18, rating: 0, img: "/images/bestOffer/nuggets.png" },
  { id: 6, name: "burgers", price: 20, rating: 0, img: "/images/bestOffer/burgers.png" },
  { id: 7, name: "Seekh Kebab", price: 33, rating: 0, img: "/images/bestOffer/kebab.png" },
];

export default function BestOffer() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto mt-5">
      <h2 className="text-center text-2xl font-bold mb-8">Best Offer For You</h2>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-5 ">
        
        {/* Left column */}
        <div className="flex flex-col gap-5">
          {offers.slice(0, 3).map((offer) => (
            <OfferCard key={offer.id} {...offer} rectangle />
          ))}
        </div>

        {/* Middle big card */}
        <div>
          <OfferCard {...offers[3]} big />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {offers.slice(4).map((offer) => (
            <OfferCard key={offer.id} {...offer} rectangle />
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferCard({ name, price, oldPrice, discount, rating, img, big, rectangle, countdown }) {
  if (rectangle) {
    return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden h-35 flex">
  {/* Image Section */}
  <div className="relative w-2/5 flex-shrink-0">
    {discount && (
      <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded z-10">
        -{discount}%
      </span>
    )}
    <img
      src={img}
      alt={name}
      className="w-full h-full object-cover rounded-xl shadow-2xl"
    />
  </div>

  {/* Card Body Section */}
  <div className="flex-1 p-4 flex flex-col justify-between">
    {/* Ratings + Add to Cart */}
    <div className="flex items-center justify-between mb-2">
      {/* Ratings */}
      <div className="flex items-center gap-1 text-yellow-400 text-sm">
        {rating > 0 ? "★".repeat(rating) : "☆"}
        <span className="text-gray-400 text-xs">({rating})</span>
      </div>

      {/* Add to Cart Button */}
      <button className="p-2  bg-black/10 hover:bg-black/30 rounded-full text-black/80 cursor-pointer transition-colors">
        <ShoppingCart size={18} />
      </button>
    </div>

    {/* Title */}
    <h3 className="font-semibold text-sm mb-2 text-gray-800">{name}</h3>

    {/* Prices */}
    <div className="flex items-center gap-2">
      <span className="text-red-500 font-bold text-lg">${price.toFixed(2)}</span>
      {oldPrice && (
        <span className="text-gray-400 line-through text-sm">${oldPrice.toFixed(2)}</span>
      )}
    </div>
  </div>
</div>


    );
  }

  // Big card (center)
  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden w-80 h-full">
      {discount && (
        <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded z-10">
          -{discount}%
        </span>
      )}
      <img
        src={img}
        alt={name}
        className="w-full h-[300px] object-cover"
      />

      <div className="p-4">
        {/* Ratings */}
<div className="flex items-center gap-1 text-yellow-400 text-sm mb-1">
  {rating > 0 ? "★".repeat(rating) : "☆"}
  <span className="text-gray-400 text-xs">({rating})</span>
</div>

{/* Name */}
<h3 className="font-semibold text-lg mb-2 text-gray-800">{name}</h3>

{/* Prices + Add to Cart */}
<div className="flex items-center justify-between mb-3">
  {/* Price */}
  <div className="flex items-center gap-2">
    <span className="text-red-500 font-bold text-xl">${price.toFixed(2)}</span>
    {oldPrice && (
      <span className="text-gray-400 line-through text-sm">${oldPrice.toFixed(2)}</span>
    )}
  </div>

  {/* Cart Button */}
  <button className="p-2 bg-black/10 hover:bg-black/30 rounded-full text-black/80 cursor-pointer transition-colors">
    <ShoppingCart size={18} />
  </button>
</div>

        
      </div>
    </div>
  );
}