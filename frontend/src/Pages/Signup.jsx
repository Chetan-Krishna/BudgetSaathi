import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button, Container } from 'react-bootstrap';
import AuthHeader from '../components/Auth/AuthHeader';
import AuthFooter from '../components/Auth/AuthFooter';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z]+([._]?[a-zA-Z]+)*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error('Invalid email! Only letters (a-z), @ and . allowed');
      return;
    }

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters!');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    toast.success('Registration successful! Redirecting...');
    setTimeout(() => navigate('/splash'), 2000);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <AuthHeader />
      
      <Container className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                Allowed: a-z characters, @ and . only
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                Minimum 8 characters required
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </div>
      </Container>
      
      <AuthFooter />
 </div>
);
}