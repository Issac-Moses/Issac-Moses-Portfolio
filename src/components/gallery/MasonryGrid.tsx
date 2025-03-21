"use client";
import React, { useState } from "react";
import styles from "./Gallery.module.scss";

const imageSources = [
  "/images/gallery/img-01.jpg",
  "/images/gallery/img-02.jpg",
  "/images/gallery/img-03.jpg",
  "/images/gallery/img-04.jpg",
  "/images/gallery/img-05.jpg",
  "/images/gallery/img-06.jpg",
  "/images/gallery/img-07.jpg",
  "/images/gallery/img-08.jpg",
  "/images/gallery/img-09.jpg",
  "/images/gallery/img-10.jpg",
  "/images/gallery/img-11.jpg",
  "/images/gallery/img-12.jpg",
  "/images/gallery/img-13.jpg",
  "/images/gallery/img-14.jpg",
  "/images/gallery/img-15.jpg",
  "/images/gallery/img-16.jpg",
  "/images/gallery/img-17.jpg",
  "/images/gallery/img-18.jpg",
  "/images/gallery/img-19.jpg",
  "/images/gallery/img-20.jpg",
  "/images/gallery/img-21.jpg",
  "/images/gallery/img-22.jpg",
  "/images/gallery/img-23.jpg",
  "/images/gallery/img-24.jpg",
  "/images/gallery/img-25.jpg",
  "/images/gallery/img-26.jpg",
  "/images/gallery/img-27.jpg",

];

const MasonryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <>
      <div className={styles.masonryGrid}>
        {imageSources.map((src, index) => (
          <div key={index} className={styles.imageContainer} onClick={() => openImage(src)}>
            <img src={src} alt={`Gallery ${index + 1}`} className={styles.gridImage} />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={closeImage}>
          <img src={selectedImage} alt="Full View" className={styles.lightboxImage} />
        </div>
      )}
    </>
  );
};

export default MasonryGrid;
