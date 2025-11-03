"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function HoverCards() {
  const cards = [
    {
      img: "/Women-emp.jpg",
      title: (
        <>
          Women <br /> Empowerment
        </>
      ),
      text: "Empowering women entrepreneurs with skills, resources and mentorship to build and grow successful businesses. Because empowered women empower communities.",
    },
    {
      img: "/Animal.jpg",
      title: "Animal Welfare",
      text: "Promoting animal welfare through rescues and shelter support. Creating awareness to build a more compassionate community.",
    },
    {
      img: "/Startup.jpg",
      title: "Startup Businesses",
      text: "Fueling innovation by connecting and empowering entrepreneurs. Turning ideas into impactful realities.",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #1b4857, #35636f)",
        padding: "80px 20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Heading */}
      <h1
        style={{
          color: "white",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "50px",
          textAlign: "center",
          letterSpacing: "1px",
        }}
      >
        Our Key Areas
      </h1>

      {/* Card Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {cards.map((card, index) => {
          const [hovered, setHovered] = useState(false);
          return (
            <div
              key={index}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                flex: "1 1 300px",
                maxWidth: "350px",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                border: "3px solid transparent", 
                borderColor: hovered ? "white" : "transparent", 
                transition: "border-color 0.3s ease",
              }}
            >
              {/* Image */}
              <Image
                src={card.img}
                alt="card image"
                width={350}
                height={220}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Overlay for heading + text */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  color: "white",
                  padding: "20px",
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    marginBottom: hovered ? "5px" : "0px",
                    transform: hovered ? "translateY(-5px)" : "translateY(0)",
                    transition: "all 0.3s ease",
                    color: hovered ? "#ffd700" : "white",
                  }}
                >
                  {card.title}
                </h3>

                {hovered && (
                  <p
                    style={{
                      margin: 0,
                      fontSize: "17px",
                      lineHeight: "1.4",
                      opacity: 1,
                      textAlign: "left",
                    }}
                  >
                    {card.text}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
