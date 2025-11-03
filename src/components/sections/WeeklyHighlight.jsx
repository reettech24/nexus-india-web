import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

export default function WeeklyHighlight() {
  return (
    <div style={{ backgroundColor: "#f5f6f8", padding: "60px 0 120px 0" }}>
      {/* Use fluid container to control spacing */}
      <Container fluid style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <Row className="align-items-center gx-0 mt-5">
          
          {/* LEFT COLUMN */}
          <Col lg={6} md={12} className="text-center text-lg-start mb-4 mb-lg-0">
            <h2 style={{ fontWeight: "700", fontSize: "3.5rem" }}>
              Weekly <br /><span style={{ color: "#f7931e" }}>Highlight</span>
            </h2>

            <div className="d-flex justify-content-center justify-content-lg-start" style={{ marginTop: "-70px", marginLeft:"90px"}}>
              <div style={{ width: "500px", maxWidth: "90%" }}>
                <Image
                  src="/man.webp"
                  alt="Businessman"
                  width={500}
                  height={650}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </Col>

          {/* RIGHT COLUMN */}
          <Col lg={6} md={12} className="d-flex flex-column justify-content-center" style={{ marginTop: "50px" }}>
            <div className="text-center mb-3">
              <Image src="/Reet-logo.jpg" alt="Small Logo" width={50} height={50} />
            </div>

            <div className="mb-4 text-center">
              <Image
                src="/Working.jpg"
                alt="Teamwork"
                width={500}
                height={300}
                style={{
                  borderRadius: "20px",
                  width: "500px",
                  maxHeight: "230px",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>

            <h3 style={{ fontWeight: "600", color: "#444" }}>Reet Technologies</h3>
            <p style={{ color: "#666", fontSize: "14px", maxWidth: "500px" }}>
              Reet Technologies, Pune is a forward-thinking IT and business consulting firm dedicated to empowering startups, SMEs, and global brands with innovation and efficiency. Based in Pune, we specialize in digital transformation, AI/ML solutions, AR/VR experiences, e-commerce and mobile app development, and data-driven digital marketing.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <Button
                variant="outline-warning"
                style={{ borderRadius: "20px", color: "#ff5733", border: "1px solid #ff5733", fontWeight: "500" }}
              >
                Read More
              </Button>
              <Button
                variant="link"
                style={{ color: "#ff5733", fontWeight: "500", textDecoration: "none" }}
              >
                Visit Website »
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
