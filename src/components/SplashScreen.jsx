import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spinner, Container } from 'react-bootstrap';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/dashboard'), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container fluid className="d-flex vh-100 justify-content-center align-items-center bg-success">
      <div className="text-center text-white">
        <h1 className="display-4 mb-3">BudgetSaathi</h1>
        <p className="fs-4 fw-light mb-4">Ab hogi bachat</p>
        <Spinner animation="border" variant="light" />
      </div>
    </Container>
);
}