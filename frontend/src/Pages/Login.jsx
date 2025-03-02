// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { Form, Button, Container } from 'react-bootstrap';
// import AuthHeader from '../components/Auth/AuthHeader';
// import AuthFooter from '../components/Auth/AuthFooter';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // Email validation (a-z, @ and . only)
//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z]+([._]?[a-zA-Z]+)*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
//     return regex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!validateEmail(email)) {
//       toast.error('Invalid email! Only letters (a-z), @ and . allowed');
//       return;
//     }

//     if (password.length < 8) {
//       toast.error('Password must be at least 8 characters!');
//       return;
//     }

//     toast.success('Login successful! Redirecting...');
//     setTimeout(() => navigate('/splash'), 2000);
//   };

//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <AuthHeader />
      
//       <Container className="flex-grow-1 d-flex align-items-center justify-content-center">
//         <div className="w-100" style={{ maxWidth: '400px' }}>
//           <h2 className="text-center mb-4">Login</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <Form.Text className="text-muted">
//                 Enter a valid email 
//               </Form.Text>
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <Form.Text className="text-muted">
//                 Minimum 8 characters required
//               </Form.Text>
//             </Form.Group>

//             <Button variant="success" type="submit" className="w-100">
//               Login
//             </Button>
//           </Form>
//         </div>
//       </Container>
      
//       <AuthFooter />
//  </div>
// );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button, Container } from 'react-bootstrap';
import AuthFooter from '../components/Auth/AuthFooter';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Email validation function
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

    toast.success('Login successful! Redirecting...');
    setTimeout(() => navigate('/splash'), 2000);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Green Header with White Text */}
      <header className="bg-success py-3 text-center">
        <h1 className="text-white">BudgetSaathi</h1>
      </header>

      <Container className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Login</h2>
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
                Enter a valid email 
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

            <Button variant="success" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </div>
      </Container>

      <AuthFooter />
    </div>
  );
}
