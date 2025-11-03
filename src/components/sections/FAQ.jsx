import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

export default function FAQ() {
  const faqs = [
    {
      question: "Is Nexus India suitable for small businesses?",
      answer:
        "Yes, Nexus India is designed to support small businesses with scalable solutions, cost-effective plans, and easy-to-use features.",
    },
    {
      question: "Is Nexus India suitable for small businesses?",
      answer:
        "Absolutely! Our platform ensures that small enterprises can manage operations effectively and grow sustainably.",
    },
    {
      question: "Is Nexus India suitable for small businesses?",
      answer:
        "Yes, we provide tools and resources tailored for startups and small-scale companies.",
    },
    {
      question: "Is Nexus India suitable for small businesses?",
      answer:
        "Definitely. Nexus India focuses on flexibility, making it ideal for small businesses to adapt quickly.",
    },
    {
      question: "Is Nexus India suitable for small businesses?",
      answer:
        "Yes, we cater to both small and medium enterprises with services designed to save time and cost.",
    },
    {
      question: "Is Nexus India suitable for small businesses?",
      answer:
        "Our platform ensures smooth business operations and growth opportunities for small businesses.",
    },
    {
      question: "Is Nexus India suitable for small businesses?",
      answer:
        "Yes, Nexus India has a strong track record of supporting small businesses with digital solutions.",
    },
    {
      question: "Is Nexus India suitable for small businesses?",
      answer:
        "We offer customizable services perfect for small businesses to expand efficiently.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f1f1f1", padding: "60px 0" }}>
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: "600" }}>
          Your Questions, <span style={{ color: "#f7931e" }}>Answered!</span>
        </h2>
        <Row>
          {faqs.map((faq, idx) => (
            <Col md={6} className="mb-3" key={idx}>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

