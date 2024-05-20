"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PhotoModal({ src, alt, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the modal after a delay to allow initial rendering
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 500); // Close the modal after 300ms transition
  };

  const handleInnerDivClick = (e) => {
    e.stopPropagation();
  };

  if (!src) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-opacity duration-500 ease-in-out transform-gpu ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-gray-800 p-4 rounded-lg relative border border-gray-600 prop transition-transform duration-500 ease-in-out transform-gpu ${
          isOpen ? "scale-100" : "scale-0"
        }`}
        onClick={handleInnerDivClick}
      >
        <button
          onClick={handleClose}
          className="text-gray-300 hover:text-white mb-2"
        >
          ❌
        </button>
        <div className="relative w-[80vw] h-[80vh]">
          <Image src={src} alt={alt} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
}
