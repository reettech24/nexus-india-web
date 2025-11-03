"use client";
import { useState } from "react";
import { Button, Nav, Row, Col, Card, Container } from "react-bootstrap";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right.js";

const categories = {
  "Real Estate": [
    { name: "Agents", color: "#f5bc37ff" },
    { name: "Contractors", color: "#69d648ff" },
    { name: "Builders", color: "#549de0ff" },
    { name: "Interior Designers", color: "#eb6a95ff" },
    { name: "Property Management", color: "#9772ecff" },
  ],
  Jewelry: [
    { name: "Designer", color: "#f5bc37ff" },
    { name: "Retailer", color: "#69d648ff" },
    { name: "Wholesalers", color: "#549de0ff" },
    { name: "Repair and Restoration", color: "#eb6a95ff" },
    { name: "Custom Makers", color: "#9772ecff" },
  ],
  Retail: [
    { name: "E-commerce Stores", color: "#f5bc37ff" },
    { name: "Fashion and Apparel", color: "#69d648ff" },
    { name: "Electronics and Appliances", color: "#549de0ff" },
    { name: "Food and Beverages", color: "#eb6a95ff" },
    { name: "Home and Lifestyle", color: "#9772ecff" },
  ],
  Manufacturing: [
    { name: "Machinery and Equipment", color: "#f5bc37ff" },
    { name: "Textiles", color: "#69d648ff" },
    { name: "Automotives and Parts", color: "#549de0ff" },
    { name: "Food Processing", color: "#eb6a95ff" },
    { name: "Chemicals and Plastics", color: "#9772ecff" },
  ],
  Agriculture: [
    { name: "Farmers", color: "#f5bc37ff" },
    { name: "Agri-tech", color: "#69d648ff" },
    { name: "Equipment Suppliers", color: "#549de0ff" },
    { name: "Organic Produce", color: "#eb6a95ff" },
    { name: "Dairy Livestock", color: "#9772ecff" },
  ],
};

export default function CategorySection() {
  const [activeTab, setActiveTab] = useState("Real Estate");

  return (
    <Container
      fluid
      className="py-5"
      style={{
        minHeight: "100vh",
        backgroundColor: "#eeeeeeff",
        // paddingLeft: "150px",
        paddingRight: "40px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1200px",  }}>
        {/* Heading */}
        <h1
          className="fw-bold text-warning mb-3"
          style={{ fontSize: "2.5rem", lineHeight: "1.2" }}
        >
          You can not miss on this
        </h1>

        {/* Paragraph */}
        <p
          className="text-muted mb-4"
          style={{ fontSize: "1.2rem", lineHeight: "1.6", maxWidth: "100%" }}
        >
          Discover the most in-demand businesses trusted by thousands. From
          timeless jewelry to expert real estate agents, and from thriving
          retail to manufacturing and agriculture—these categories define
          opportunity and growth. Explore the best of what people are searching
          for, all in one place.
        </p>

        {/* Tabs */}
        <div className="d-flex flex-wrap align-items-center mb-4 justify-content-start"style={{ gap: "80px",paddingLeft: "50px" }}>
          <Nav
            variant="tabs"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="d-flex flex-wrap border-0"
            style={{ gap: "3.9rem", fontSize: "1rem",
}}
          >
            {Object.keys(categories).map((tab) => (
              <Nav.Item key={tab}>
                <Nav.Link
                  eventKey={tab}
                  style={{
                    fontSize: "1.4rem",
                    color: activeTab === tab ?"#FF5733" : "grey",
                    border: "none", 
                    borderBottom:
                      activeTab === tab ? "2px solid #FF5733" : "none", 
                    borderRadius: "0",
                    fontWeight: activeTab === tab ? "600" : "normal",
                    backgroundColor: "transparent",
                  }}
                >
                  {tab}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Button
            variant="outline-warning"
            className="d-flex align-items-center mt-2 mt-md-0"
            style={{
              borderRadius: "30px", 
              padding: "8px 18px",
              fontWeight: "500",
              color:"#FF5733",
              border: "1px solid #FF5733" 
            }}
          >
            View All <ArrowRight size={16} className="ms-2" />
          </Button>
        </div>

        {/* Cards */}
        <Row className="g-3" style={{ rowGap: "40px", columnGap: "20px",marginTop: "30px",paddingLeft: "50px", }}>
          {categories[activeTab]?.map((item, idx) => (
            <Col xs={12} sm={6} md={4} lg={2} key={idx}>
              <Card
                className="shadow-sm text-white"
                style={{
                  backgroundColor: item.color,
                  borderRadius: "1rem",
                  minHeight: "190px", 
                  minWidth:"190px",
                  fontSize: "1.1rem",
                }}
              >
                <Card.Body
                  className="d-flex justify-content-center align-items-center text-center"
                  style={{ height: "100%",fontSize: "1.4rem" }}
                >
                  {item.name}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
