import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div style={{ background: "linear-gradient(180deg, #1b4857, #35636f)" }}>
      <Container className="py-5 text-center">
        {/* Heading */}
        <h1 className="fw-bold mb-5" style={{ color: "#f5a623" }}>
          Real Results and Real Voices from
          <br />
          Our Happy Customers
        </h1>

        <Row className="g-4 justify-content-center">
          {/* Card 1 */}
          <Col xs={12} md={4}>
            <Card className="p-3 h-100 shadow-sm rounded-4 border-0">
              <Card.Body>
                <p className="text-start">
                  " <span className="fw-bold text-primary">Nexus India</span> tool
                  is not only powerful but also incredibly user..."
                </p>
                <div className="d-flex align-items-center mt-4">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#ddd",
                    }}
                    className="me-3"
                  ></div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">Emily Ray</h6>
                    <small className="text-muted">Tech Innovators Inc.</small>
                  </div>
                  <div className="ms-auto d-flex align-items-center">
                    <FaStar color="#f5a623" />
                    <span className="ms-1 fw-bold">4.8</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col xs={12} md={4}>
            <Card className="p-3 h-100 shadow-sm rounded-4 border-0">
              <Card.Body>
                <p className="text-start">
                  " <span className="fw-bold text-primary">I love how</span> intuitive
                  Nexus India is—it's like having a financial expert on..."
                </p>
                <div className="d-flex align-items-center mt-4">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#ddd",
                    }}
                    className="me-3"
                  ></div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">Gracie Abrams</h6>
                    <small className="text-muted">FinancePro Solutions</small>
                  </div>
                  <div className="ms-auto d-flex align-items-center">
                    <FaStar color="#f5a623" />
                    <span className="ms-1 fw-bold">4.8</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col xs={12} md={4}>
            <Card className="p-3 h-100 shadow-sm rounded-4 border-0">
              <Card.Body>
                <p className="text-start">
                  " <span className="fw-bold text-primary">Nexus India</span> has
                  saved us countless hours on financial reporting, allowing..."
                </p>
                <div className="d-flex align-items-center mt-4">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#ddd",
                    }}
                    className="me-3"
                  ></div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">Theo James</h6>
                    <small className="text-muted">Retail Success Ltd.</small>
                  </div>
                  <div className="ms-auto d-flex align-items-center">
                    <FaStar color="#f5a623" />
                    <span className="ms-1 fw-bold">4.8</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Repeat Row for bottom 3 cards */}
          <Col xs={12} md={4}>
            <Card className="p-3 h-100 shadow-sm rounded-4 border-0">
              <Card.Body>
                <p className="text-start">
                  " <span className="fw-bold text-primary">Nexus India</span> tool
                  is not only powerful but also incredibly user..."
                </p>
                <div className="d-flex align-items-center mt-4">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#ddd",
                    }}
                    className="me-3"
                  ></div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">Emily Ray</h6>
                    <small className="text-muted">Tech Innovators Inc.</small>
                  </div>
                  <div className="ms-auto d-flex align-items-center">
                    <FaStar color="#f5a623" />
                    <span className="ms-1 fw-bold">4.8</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="p-3 h-100 shadow-sm rounded-4 border-0">
              <Card.Body>
                <p className="text-start">
                  " <span className="fw-bold text-primary">I love how</span> intuitive
                  Nexus India is—it's like having a financial expert on..."
                </p>
                <div className="d-flex align-items-center mt-4">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#ddd",
                    }}
                    className="me-3"
                  ></div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">Gracie Abrams</h6>
                    <small className="text-muted">FinancePro Solutions</small>
                  </div>
                  <div className="ms-auto d-flex align-items-center">
                    <FaStar color="#f5a623" />
                    <span className="ms-1 fw-bold">4.8</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="p-3 h-100 shadow-sm rounded-4 border-0">
              <Card.Body>
                <p className="text-start">
                  " <span className="fw-bold text-primary">Nexus India</span> has
                  saved us countless hours on financial reporting, allowing..."
                </p>
                <div className="d-flex align-items-center mt-4">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#ddd",
                    }}
                    className="me-3"
                  ></div>
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">Theo James</h6>
                    <small className="text-muted">Retail Success Ltd.</small>
                  </div>
                  <div className="ms-auto d-flex align-items-center">
                    <FaStar color="#f5a623" />
                    <span className="ms-1 fw-bold">4.8</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
