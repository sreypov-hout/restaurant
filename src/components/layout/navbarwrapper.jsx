"use client";
import React from "react";
import Navbar from "./navbar";
import { useCart } from "@/context/cartContext";

export default function NavbarWrapper() {
  const { cartCount, searchQuery, setSearchQuery } = useCart();

  return (
    <Navbar
      cartCount={cartCount}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
}
