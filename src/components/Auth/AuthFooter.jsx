import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function AuthFooter() {
  return (
    <Container fluid className="bg-light mt-auto py-4">
      <Row className="text-center">
        <Col md={4} className="mb-3">
          <h5>Contact Us</h5>
          <p className="m-0">support@budgetsaathi.com</p>
          <p>+91-9876543210</p>
        </Col>
        
        <Col md={4} className="mb-3">
          <h5>Follow Us</h5>
          <div className="d-flex justify-content-center gap-3">
            <FaFacebook size={24} className="text-success" />
            <FaTwitter size={24} className="text-success" />
            <FaInstagram size={24} className="text-success" />
          </div>
        </Col>
        
        <Col md={4}>
          <h5>Legal</h5>
          <div className="d-flex flex-column gap-2">
            <a href="/terms" className="text-success text-decoration-none">Terms of Service</a>
            <a href="/privacy" className="text-success text-decoration-none">Privacy Policy</a>
          </div>
        </Col>
      </Row>
    </Container>
);
}