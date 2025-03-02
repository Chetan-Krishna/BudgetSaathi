// import { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Dashboard = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const [type, setType] = useState('Income');
//   const [show, setShow] = useState(false);
//   const [editIndex, setEditIndex] = useState(null);

//   const COLORS = ['#28a745', '#dc3545']; // Green for Income, Red for Expense

//   const notify = (message, type = 'success') => {
//     toast[type](message);
//   };

//   const handleAddTransaction = () => {
//     if (!description || !amount) return;
//     const newTransaction = { description, amount: parseFloat(amount), type };
//     setTransactions([...transactions, newTransaction]);
//     notify('Transaction added successfully!');
//     setDescription('');
//     setAmount('');
//   };

//   const handleDelete = (index) => {
//     const updatedTransactions = transactions.filter((_, i) => i !== index);
//     setTransactions(updatedTransactions);
//     notify('Transaction deleted successfully!');
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     const transaction = transactions[index];
//     setDescription(transaction.description);
//     setAmount(transaction.amount.toString());
//     setType(transaction.type);
//     setShow(true);
//   };

//   const handleUpdateTransaction = () => {
//     const updatedTransactions = [...transactions];
//     updatedTransactions[editIndex] = { description, amount: parseFloat(amount), type };
//     setTransactions(updatedTransactions);
//     notify('Transaction updated successfully!');
//     setShow(false);
//     setDescription('');
//     setAmount('');
//     setEditIndex(null);
//   };

//   // Prepare data for the pie chart
//   const income = transactions.filter(t => t.type === 'Income').reduce((acc, curr) => acc + curr.amount, 0);
//   const expense = transactions.filter(t => t.type === 'Expense').reduce((acc, curr) => acc + curr.amount, 0);
//   const pieData = [
//     { name: 'Income', value: income },
//     { name: 'Expense', value: expense },
//   ];

//   return (
//     <div className="container mt-3">
//       <ToastContainer />
//       <nav className="navbar navbar-expand-lg navbar-light bg-white mb-4 w-100" style={{ position: 'relative', marginTop: '20px', left: 0, right: 0, width: '100%', padding: '20px 40px', height: '80px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderBottom: '2px solid #e0e0e0' }}>
//         <div className="container-fluid">
//           <span className="navbar-brand text-success">BudgetSaathi</span>
//           <button className="btn btn-danger">Logout</button>
//         </div>
//       </nav>

//       <div className="card p-3 mb-4">
//         <h3>Add Transaction</h3>
//         <Form>
//           <Form.Group className="mb-3">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Enter description"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Amount</Form.Label>
//             <Form.Control
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Enter amount"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Type</Form.Label>
//             <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
//               <option>Income</option>
//               <option>Expense</option>
//             </Form.Select>
//           </Form.Group>
//           <Button variant="success" onClick={handleAddTransaction}>Add Transaction</Button>
//         </Form>
//       </div>

//       <h3>Transaction History</h3>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Description</th>
//             <th>Amount</th>
//             <th>Type</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((txn, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{txn.description}</td>
//               <td>{txn.amount}</td>
//               <td>{txn.type}</td>
//               <td>
//                 <Button variant="warning" size="sm" onClick={() => handleEdit(index)}>Edit</Button>{' '}
//                 <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3>Income vs Expense</h3>
//       <PieChart width={400} height={300}>
//         <Pie
//           data={pieData}
//           cx="50%"
//           cy="50%"
//           outerRadius={100}
//           label
//           dataKey="value"
//         >
//           {pieData.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//         <Legend />
//       </PieChart>

//       <Modal show={show} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Transaction</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Amount</Form.Label>
//               <Form.Control
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Type</Form.Label>
//               <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
//                 <option>Income</option>
//                 <option>Expense</option>
//               </Form.Select>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
//           <Button variant="success" onClick={handleUpdateTransaction}>Update</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Dashboard;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { Modal, Button, Form } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const navigate = useNavigate(); // Hook for redirection
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Income');
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const COLORS = ['#28a745', '#dc3545']; 

  const notify = (message, type = 'success') => {
    toast[type](message);
  };

  const handleLogout = () => {
    notify('Logging out...');
    
    // Clear user session (if using authentication)
    localStorage.removeItem('user'); 
    sessionStorage.removeItem('user'); 

    setTimeout(() => {
      navigate('/login'); // Redirect to login page
    }, 1000);
  };

  const handleAddTransaction = () => {
    if (!description || !amount) return;
    const newTransaction = { description, amount: parseFloat(amount), type };
    setTransactions([...transactions, newTransaction]);
    notify('Transaction added successfully!');
    setDescription('');
    setAmount('');
  };

  const handleDelete = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
    notify('Transaction deleted successfully!');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const transaction = transactions[index];
    setDescription(transaction.description);
    setAmount(transaction.amount.toString());
    setType(transaction.type);
    setShow(true);
  };

  const handleUpdateTransaction = () => {
    const updatedTransactions = [...transactions];
    updatedTransactions[editIndex] = { description, amount: parseFloat(amount), type };
    setTransactions(updatedTransactions);
    notify('Transaction updated successfully!');
    setShow(false);
    setDescription('');
    setAmount('');
    setEditIndex(null);
  };

  // Prepare data for the pie chart
  const income = transactions.filter(t => t.type === 'Income').reduce((acc, curr) => acc + curr.amount, 0);
  const expense = transactions.filter(t => t.type === 'Expense').reduce((acc, curr) => acc + curr.amount, 0);
  const pieData = [
    { name: 'Income', value: income },
    { name: 'Expense', value: expense },
  ];

  return (
    <div className="container-fluid p-0">
      <ToastContainer />
      
      {/* Navbar (Stretched Full Width) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-success shadow p-3 mb-4 w-100">
        <div className="container-fluid d-flex justify-content-between">
          <span className="navbar-brand text-white fs-3 fw-bold">BudgetSaathi</span>
          <button className="btn btn-danger px-4" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="container">
        <div className="card p-4 mb-4">
          <h3 className="text-success">Add Transaction</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
                <option>Income</option>
                <option>Expense</option>
              </Form.Select>
            </Form.Group>
            <Button variant="success" onClick={handleAddTransaction}>Add Transaction</Button>
          </Form>
        </div>

        <h3 className="text-success">Transaction History</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{txn.description}</td>
                <td>{txn.amount}</td>
                <td>{txn.type}</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleEdit(index)}>Edit</Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 className="text-success">Income vs Expense</h3>
        <div className="d-flex justify-content-center">
          <PieChart width={400} height={300}>
            <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} label dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length] || '#000'} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      {/* Edit Transaction Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
                <option>Income</option>
                <option>Expense</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
          <Button variant="success" onClick={handleUpdateTransaction}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;

