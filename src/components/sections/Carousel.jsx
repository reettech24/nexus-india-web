"use client";
import Image from "next/image";

export default function Carousel({ id, images, spacing = "mb-5" }) {
  return (
    <div id={id} className={`carousel slide w-100 ${spacing}`} data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <Image
              src={img.src}
              alt={img.alt || `Slide ${index + 1}`}
              className="d-block w-100"
              width={1600}
              height={500}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}
