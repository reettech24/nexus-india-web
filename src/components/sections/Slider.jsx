"use client";
import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Slider() {
  const mainSlides = [
    { img: "/carousel1.jpg" },
    { img: "/vase.webp" },
    { img: "/vase2.jpg" },
  ];

  const leftSlides = [
    { img: "/carousel2.png" },
    { img: "/students.avif" },
  ];

  const rightSlides = [
    { img: "/carousel2.png" },
    { img: "/students.avif" },
  ];

  const Slide = ({ slide, height = "560px", overlay = true }) => {
    return (
      <div
        style={{
          position: "relative",
          height,
          backgroundImage: `url(${slide.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        {overlay && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              
            }}
          ></div>
        )}

        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row>
            <Col md={7}>
              {slide.title && (
                <h1
                  style={{
                    color: slide.titleColor || "#fff",
                    fontSize: "3rem",
                    fontWeight: "700",
                  }}
                >
                  {slide.title}
                </h1>
              )}
              {slide.subtitle && (
                <p
                  style={{
                    color:
                      slide.titleColor === "#ffffff"
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(0,0,0,0.75)",
                    fontSize: "1.2rem",
                    maxWidth: "700px",
                  }}
                >
                  {slide.subtitle}
                </p>
              )}
              {slide.buttonText && (
                <Button
                  style={{
                    backgroundColor: slide.buttonBg,
                    border: "none",
                    padding: "10px 25px",
                    borderRadius: "25px",
                    fontWeight: "600",
                  }}
                >
                  {slide.buttonText}
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  return (
    <div style={{ width: "100%", overflow: "hidden", marginTop: "30px" }}>
      {/* MAIN CAROUSEL */}
<Carousel controls={false} indicators={false} interval={2000}>
        {mainSlides.map((s, i) => (
          <Carousel.Item key={i}>
            <Slide slide={s} height="320px" />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* BOTTOM CAROUSELS */}
      <div style={{ background: "#f2f2f2", padding: "40px 0", margin: 0 }}>
        <Container fluid className="px-0">
          <Row className="mx-0" style={{ display: "flex", gap: "20px" }}>
            {/* LEFT CAROUSEL */}
            <Col xs={12} md={6} className="px-0" style={{ flex: 1 }}>
              <Carousel controls={false} indicators={false} interval={2000}>
                {leftSlides.map((s, i) => (
                  <Carousel.Item key={i}>
                    <div
                      style={{
                        position: "relative",
                        height: "400px",
                        backgroundImage: `url(${s.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0.2))",
                        }}
                      ></div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            {/* RIGHT CAROUSEL */}
            <Col xs={12} md={6} className="px-0" style={{ flex: 1 }}>
              <Carousel controls={false} indicators={false} interval={2000}>
                {rightSlides.map((s, i) => (
                  <Carousel.Item key={i}>
                    <div
                      style={{
                        position: "relative",
                        height: "400px",
                        backgroundImage: `url(${s.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                         
                        }}
                      ></div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
