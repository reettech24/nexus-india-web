"use client";

import { useState } from "react";
import { Container, Row, Col, Button, Card, Nav } from "react-bootstrap";
import Image from "next/image";

const tabs = ["Yoga", "Zumba", "Gym", "Dance", "Cricket", "Badminton"];

const productsData = {
  Yoga: [
    {
      name: "Yoga Mat",
      price: 50,
      desc: "Durable, non-slip yoga mat designed for comfort and stability—perfect for every pose, from beginner to advanced.",
      img: "/Yoga-Mat.jpg",
    },
    {
      name: "Resistance Band",
      price: 60,
      desc: "Stretch and strengthen your muscles with this durable resistance band.",
      img: "/Resistance-Band.jpg",
    },
    {
      name: "Meditation Mala",
      price: 40,
      desc: "Find focus with a handcrafted meditation mala for your yoga and mindfulness sessions.",
      img: "/Meditation-Mala.webp",
    },
    {
      name: "Dumbbells",
      price: 55,
      desc: "Enhance flexibility and improve balance with this strong Dumbbells.",
      img: "/dumbbles.webp",
    },
    {
      name: "Slam Ball",
      price: 30,
      desc: "Support your posture and perfect your poses using this foam yoga block.",
      img: "/Slamball.webp",
    },
  ],

  Zumba: [
    {
      name: "Ultimate Leggings",
      price: 500,
      desc: "Lightweight and flexible shoes designed for fast Zumba dance moves.",
      img: "/leggings.webp",
    },
    {
      name: "Socks",
      price: 200,
      desc: "Soft, quick-dry towel for high-energy workouts.",
      img: "/socks.avif",
    },
    {
      name: " T-shirt",
      price: 600,
      desc: "Bright and breathable Zumba outfit to keep you moving with style.",
      img: "/Tshirt.webp",
    },
    {
      name: " Shorts",
      price: 5500,
      desc: "Portable speaker for energetic Zumba sessions.",
      img: "/Shorts.jpg",
    },
    {
      name: "Shoes",
      price: 1400,
      desc: "Stretchy sweat-absorbing headband for comfort during dance.",
      img: "/Shoes.webp",
    },
  ],

  Gym: [
    {
      name: "Dumbbells",
      price: 80,
      desc: "High-quality dumbbells for strength training and toning.",
      img: "/dumbbles.webp",
    },
    {
      name: "Resistance Band",
      price: 25,
      desc: "Durable resistance bands for full-body workouts.",
      img: "/Resistance-Band.jpg",
    },
    {
      name: "Gym Gloves",
      price: 35,
      desc: "Comfortable gloves that protect your hands during workouts.",
      img: "/gym-gloves.jpg",
    },
    {
      name: "Water Bottle",
      price: 15,
      desc: "Insulated water bottle to keep you hydrated.",
      img: "/bottle.jpg",
    },
    {
      name: "Protein Shaker",
      price: 25,
      desc: "Blends your protein shakes easily post-workout.",
      img: "/shaker.jpg",
    },
  ],

  Dance: [
    {
      name: "Dance Shoes",
      price: 70,
      desc: "Comfortable, flexible shoes for all dance styles.",
      img: "/dance-shoes.jpg",
    },
    {
      name: "Dance Outfit",
      price: 90,
      desc: "Stylish outfit for your next performance.",
      img: "/dance-outfit.jpg",
    },
    {
      name: "Dance Bag",
      price: 45,
      desc: "Spacious bag to carry all your dance essentials.",
      img: "/dance-bag.jpg",
    },
    {
      name: "Music Player",
      price: 60,
      desc: "Portable music player to practice anywhere.",
      img: "/music-player.jpg",
    },
    {
      name: "Stretch Band",
      price: 30,
      desc: "Helps improve flexibility for dance warm-ups.",
      img: "/stretch-band.jpg",
    },
  ],

  Cricket: [
    {
      name: "Cricket Bat",
      price: 120,
      desc: "Premium willow bat for powerful shots.",
      img: "/cricket-bat.jpg",
    },
    {
      name: "Cricket Ball",
      price: 30,
      desc: "Durable leather ball for professional-level play.",
      img: "/cricket-ball.jpg",
    },
    {
      name: "Cricket Gloves",
      price: 50,
      desc: "High-quality gloves for comfortable grip.",
      img: "/cricket-gloves.jpg",
    },
    {
      name: "Cricket Pads",
      price: 75,
      desc: "Protective pads for safe batting.",
      img: "/cricket-pads.jpg",
    },
    {
      name: "Cricket Helmet",
      price: 95,
      desc: "Safety-first helmet for confident play.",
      img: "/cricket-helmet.jpg",
    },
  ],

  Badminton: [
    {
      name: "Badminton Racket",
      price: 90,
      desc: "Lightweight racket designed for precision and power.",
      img: "/badminton-racket.jpg",
    },
    {
      name: "Shuttlecock Pack",
      price: 25,
      desc: "Pack of high-quality shuttlecocks for smooth flight.",
      img: "/shuttlecock.jpg",
    },
    {
      name: "Grip Tape",
      price: 10,
      desc: "Anti-slip grip for comfortable racket handling.",
      img: "/grip-tape.jpg",
    },
    {
      name: "Badminton Net",
      price: 45,
      desc: "Strong and durable net for indoor and outdoor play.",
      img: "/badminton-net.jpg",
    },
    {
      name: "Kit Bag",
      price: 50,
      desc: "Spacious bag to carry rackets, shoes, and accessories.",
      img: "/kit-bag.jpg",
    },
  ],
};

export default function SportsFitness() {
  const [activeTab, setActiveTab] = useState("Yoga");

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #1b4857, #35636f)",
        color: "white",
        padding: "60px 0",
      }}
    >
      <Container>
        <h1 className="text-center fw-bold mb-4" style={{ color: "orange" }}>
          Sports & Fitness
        </h1>

        {/* Tabs */}
        <Nav variant="tabs" className="justify-content-center mb-4">
          {tabs.map((tab) => (
            <Nav.Item key={tab} className="mx-4">
              <Nav.Link
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  color: activeTab === tab ? "orange" : "white",
                  fontSize: "1.3rem",
                }}
              >
                {tab}
              </Nav.Link>
            </Nav.Item>
          ))}
          <Nav.Item className="ms-auto">
            <Nav.Link style={{ color: "orange" }}>View All &gt;&gt;</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Info Section */}
        <Row className="align-items-center mb-5">
  <Col md={8} style={{ fontSize: "1.2rem" }}>
    <p style={{ marginBottom: 0 }}>
      <span style={{ whiteSpace: "nowrap" }}>
        Discover peace and balance with expert-led fitness sessions. Book classes that help
      
      improve flexibility, </span>
      <br />strength, and mindfulness right from your local trainers.
    </p>
  </Col>

  <Col md={4} className="text-md-end">
    <Button
      variant="outline-warning"
      style={{
        borderRadius: "25px",
        padding: "8px 17px",
        borderWidth: "1px",
        fontWeight: "450",
        color: "white",
        borderColor: "white",
        backgroundColor: "transparent",
      }}
    >
      View Instructors
    </Button>
  </Col>
</Row>


        {/* 🟧 Product Cards (same layout, 5 cards always) */}
        <Row className="g-3">
          {productsData[activeTab].map((p, i) => (
            <Col key={i} md={2} style={{ flex: "0 0 20%" }}>
              <Card
                className="h-100 shadow-sm"
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  margin: "0 2px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <Card.Img
                    src={p.img}
                    alt={p.name}
                    style={{
                      height: "140px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "6px",
                      left: "6px",
                      backgroundColor: "#FFA500",
                      color: "white",
                      padding: "2px 6px",
                      fontSize: "0.7rem",
                      borderRadius: "3px",
                      fontWeight: "500",
                    }}
                  >
                    Brand Name
                  </span>
                </div>
                <Card.Body style={{ padding: "6px" }}>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <Card.Title
                      style={{ fontSize: "0.9rem", marginBottom: 0 }}
                    >
                      {p.name}
                    </Card.Title>
                    <span
                      style={{ fontWeight: "600", fontSize: "0.85rem" }}
                    >
                      ₹{p.price.toFixed(2)}
                    </span>
                  </div>
                  <Card.Text
                    style={{
                      fontSize: "0.75rem",
                      color: "#555",
                      marginBottom: "6px",
                    }}
                  >
                    {p.desc.length > 40
                      ? p.desc.substring(0, 40) + "..."
                      : p.desc}
                  </Card.Text>
                  <Button
                    variant="outline-warning"
                    style={{
                      borderColor: "#FFA500",
                      color: "#FFA500",
                      borderRadius: "5px",
                      fontWeight: "500",
                      fontSize: "0.75rem",
                      padding: "3px 10px",
                    }}
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
