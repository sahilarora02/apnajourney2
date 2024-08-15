import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../store/slices/userSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const registerHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phoneNumber);
    formData.append('password', password);
    dispatch(register(formData));
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0 0 25px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '500px'
      }}>
        <h2 style={{ color: '#ff6600', textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>Register</h2>
        <form onSubmit={registerHandler}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              marginBottom: '1.5rem',
              border: '2px solid #ccc',
              borderRadius: '10px',
              fontSize: '1.1rem',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              marginBottom: '1.5rem',
              border: '2px solid #ccc',
              borderRadius: '10px',
              fontSize: '1.1rem',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              marginBottom: '1.5rem',
              border: '2px solid #ccc',
              borderRadius: '10px',
              fontSize: '1.1rem',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              marginBottom: '1.5rem',
              border: '2px solid #ccc',
              borderRadius: '10px',
              fontSize: '1.1rem',
              boxSizing: 'border-box'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              transition: 'background-color 0.3s, transform 0.1s'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ff8533';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ff6600';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Register
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem' }}>
          Already have an account? <Link to="/login" style={{ color: '#ff6600', fontWeight: 'bold' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
