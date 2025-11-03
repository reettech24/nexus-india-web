import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f2f3f5", minHeight: "100vh" }}>
      <Container className="py-5 text-center">
        {/* Heading */}
        <h1 className="fw-bold mb-3 text-5xl">
          Regular <span className="text-warning">Needs</span>
        </h1>
        <p
          className="text-muted mx-auto mb-5"
          style={{ maxWidth: "1000px", fontSize: "20px" }}
        >
          From daily essentials to emergency fixes, find everything you need
          right around the corner—dairy, kirana, fresh veggies, technicians, and
          more. Our Regular Needs section ensures your everyday requirements are
          met quickly with trusted local vendors and healthcare facilities
          nearby.
        </p>

        {/* Cards Section */}
        <Row className="g-4 justify-content-center">
          {[
            {
              img: "/Kirana_shop1.jpg",
              title: "Kirana Stores",
              desc: "Stock up on your everyday groceries and essentials with your trusted neighborhood kirana shops.",
            },
            {
              img: "/Technicians.png",
              title: "Technicians",
              desc: "Quick, reliable solutions for home repairs and technical support when you need them.",
            },
            {
              img: "/Medical.jpg",
              title: "Medical Support",
              desc: "Accessible clinics and healthcare services to keep you and your family cared for.",
            },
          ].map((card, i) => (
            <Col xs={12} sm={6} md={4} lg={3} key={i}>
              <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden hero-card position-relative">
                {/* Image */}
                <div
                  className="position-relative"
                  style={{ height: "47vh", minHeight: "250px" }}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Text box -  */}
                <div className="hero-text p-3 text-start">
                  <h5 className="text-warning fw-bold hero-title">
                    {card.title}
                  </h5>
                  <p className="text-white small mb-0 hero-desc">
                    {card.desc}
                  </p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Bottom Images */}
      <Container fluid className="py-5">
        <Row className="g-4">
          <Col xs={12} md={6}>
            <div
              className="position-relative"
              style={{
                height: "40vh",
                minHeight: "300px",
                borderRadius: "7px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/bag-img1.webp"
                alt="Image 1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div
              className="position-relative"
              style={{
                height: "40vh",
                minHeight: "300px",
                borderRadius: "7px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/image2.webp"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Hover effect */}
      <style jsx>{`
        .hero-card {
          position: relative;
          color: white;
        }
          .hero-desc {
          font-size: 0.9rem;  /* You can try 1rem or 1.1rem for bigger paragraph text */
          line-height: 1.4;
          }

        /* Text positioned at bottom-left manually */
        .hero-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
          transition: background 0.3s ease;
        }

        .hero-card .hero-title,
        .hero-card .hero-desc {
          transition: transform 0.3s ease;
        }

        .hero-card:hover .hero-title,
        .hero-card:hover .hero-desc {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
