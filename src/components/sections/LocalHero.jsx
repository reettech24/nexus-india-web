import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LocalHero() {
  const heroes = [
    {
      name: "Handicrafts",
      img: "Handicraft.webp",
      description:
        "Discover unique, handcrafted treasures that celebrate local artistry and tradition.",
    },
    {
      name: "Eco-friendly\nproducts",
      img: "/Eco-friendly.jpg",
      description:
        "Shop sustainable goods crafted with care for you and the planet.",
    },
    {
      name: "Artworks",
      img: "/artwork1.jpg",
      description:
        "Experience the creativity of local artists bringing culture and stories to life.",
    },
    {
      name: "Lifestyle",
      img: "/lifestyle.jpg",
      description:
        "Explore locally inspired lifestyle products that blend heritage with modern living.",
    },
  ];

  return (
    <section className="container my-5">
      <h1 className="text-center fw-bold mb-4">
        Your Local Heroes, <span style={{ color: "orange" }}>Now Online</span>
      </h1>

      <style>{`
        .hero-card {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
        }

        .hero-card img {
          height: 500px;
          width: 100%;
          object-fit: cover;
        }

        .hero-card::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .hero-text {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 1rem;
          color: white;
          z-index: 2;
          transition: transform 0.4s ease;
          transform-origin: bottom left;
        }

        .hero-title {
          color: orange;
          font-weight: bold;
          font-size: 1.3rem;
          white-space: pre-line; /* for \n in eco-friendly products */
          transition: transform 0.4s ease, font-size 0.4s ease;
        }

        .hero-desc {
          font-size: 1rem;
          transition: transform 0.4s ease, font-size 0.4s ease;
        }

        /* Hover effect only on text */
        .hero-card:hover .hero-title,
        .hero-card:hover .hero-desc {
          transform: scale(1.08);
        }
      `}</style>

      <div className="row">
        {heroes.map((hero, index) => (
          <div className="col-lg-3 col-md-6 mb-3" key={index}>
            <div className="hero-card">
              <img src={hero.img} alt={hero.name} />
              <div className="hero-text">
                <h5 className="hero-title">{hero.name}</h5>
                <p className="hero-desc mb-0">{hero.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
