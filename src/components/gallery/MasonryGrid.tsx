"use client";

import React, { useState } from "react";

interface ImageData {
  src: string;
  alt: string;
  orientation?: string;
}

interface MasonryGridProps {
  images: ImageData[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* GALLERY GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          width: "100%",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{ width: "100%", overflow: "hidden", cursor: "pointer" }}
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {isModalOpen && selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: "relative",
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",       // ALLOW SCROLLING
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={closeModal}
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MasonryGrid;
