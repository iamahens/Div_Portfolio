import React from "react";

const imageUrls = [
  "/gallery1.png",
  "/gallery2.jpg",
  "/gallery3.png",
  "/gallery4.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery9.jpg",
  "/gallery10.jpg",
];

export default function Gallerysection() {
  return (
    <div className="relative z-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          Gallery Highlights
        </span>
      </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 ${
                index % 5 === 0 ? "col-span-2" : ""
              }`}
            >
              <img
                src={url}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              {/* Hue overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-25 transition-opacity duration-500 z-10 mix-blend-screen pointer-events-none" />
            </div>
          ))}
        </div>
    </div>
  );
}
