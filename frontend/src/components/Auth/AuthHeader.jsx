import { Container } from 'react-bootstrap';

const AuthHeader = () => {
  return (
    <Container fluid className="bg-white shadow-sm">
      <div className="d-flex justify-content-start p-3">
        <h1 className="text-success fw-bold m-0">BudgetSaathi</h1>
      </div>
    </Container>
  );
};

export default AuthHeader;