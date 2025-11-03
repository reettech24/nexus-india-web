"use client";
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  { src: "/Dermat.avif", title: "Dermatologist" },
  { src: "/Psychiatry 1.png", title: "" },
  { src: "/Cardio.jpg", title: "Cardiologist" },
  { src: "/gynecologist.jpg", title: "Gynecologist" },
  { src: "/orthopedic.jpg", title: "Orthopedic" },
  // { src: "/pediatrician.jpg", title: "Pediatrician" },
  // { src: "/dentist.jpg", title: "Dentist" },
];

export default function WeeklyHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const visibleCards = 3;
  const gap = 25; // px

  // Duplicate first 3 cards for smooth looping
  const loopedCards = [...cards, ...cards.slice(0, visibleCards)];

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev + 1 === cards.length) {
          return 0; // reset to start
        }
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(180deg, #1b4857, #35636f)",
        minHeight: "90vh",
        paddingTop: "150px",
        paddingLeft: "5%",
        paddingRight: "5%",
      }}
    >
      <Container fluid>
        <Row className="align-items-center">
          {/* LEFT SECTION */}
          <Col lg={6} md={12} className="text-center text-lg-start mb-4 mb-lg-0">
            <h1
              style={{
                fontWeight: "700",
                fontSize: "3.5rem",
                color: "white",
              }}
            >
              Healthcare <br /> Specialist <br />{" "}
              <span style={{ color: "#f7931e" }}>Near You</span>
            </h1>
            <p style={{ color: "white", fontSize: "1.1rem", lineHeight: "1.5" }}>
              Discover trusted healthcare specialists near you – <br />
              from doctors and clinics to wellness experts – <br />
              ready to support your health journey.
            </p>
          </Col>

          {/* RIGHT SECTION */}
          <Col lg={6} md={12}>
            <div
              ref={containerRef}
              style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                marginTop: "30px",
              }}
            >
              <motion.div
                style={{
                  display: "flex",
                  gap: `${gap}px`,
                }}
                animate={{
                  x: containerRef.current
                    ? `-${currentIndex * (containerRef.current.offsetWidth / visibleCards + gap)}px`
                    : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {loopedCards.map((card, index) => (
                  <Card
                    key={index}
                    className="shadow-sm border-0 flex-shrink-0"
                    style={{
                      borderRadius: "20px",
                      height: "420px",
                      overflow: "hidden",
                      backgroundColor: "#003f45",
                      width: `calc((100% - ${gap * (visibleCards - 1)}px) / ${visibleCards} * 1.1)`, // wider cards
                      minWidth: `calc((100% - ${gap * (visibleCards - 1)}px) / ${visibleCards} * 1.1)`,
                      flex: "0 0 auto",
                      position: "relative",
                    }}
                  >
                    <div style={{ position: "relative", height: "100%", width: "100%" }}>
                      <Image
                        src={card.src}
                        alt={card.title}
                        fill
                        style={{ objectFit: "cover", filter: "brightness(70%)" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "#f7931e",
                          fontWeight: "600",
                          fontSize: "1.7rem",
                          textAlign: "center",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {card.title}
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
