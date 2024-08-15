import { useState } from "react";import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.user);

  const loginHandler = async (e) => {
    e.preventDefault();
    const success = await dispatch(loginUser(email, password));
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '4rem',
        borderRadius: '20px',
        boxShadow: '0 0 30px rgba(0,0,0,0.1)',
        width: '900px'
      }}>
        <h2 style={{ color: '#ff6600', textAlign: 'center', marginBottom: '2.5rem', fontSize: '3rem' }}>Login</h2>
        {error && <p style={{ color: 'red', textAlign: 'center', fontSize: '1.1rem', marginBottom: '1.5rem' }}>{error}</p>}
        <form onSubmit={loginHandler}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem',
              marginBottom: '2rem',
              border: '2px solid #ccc',
              borderRadius: '10px',
              fontSize: '1.2rem'
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
              marginBottom: '2rem',
              border: '2px solid #ccc',
              borderRadius: '10px',
              fontSize: '1.2rem'
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
              fontSize: '1.3rem',
              fontWeight: 'bold',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#ff8533'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ff6600'}
          >
            Login
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1.1rem' }}>
          Don&apos;t have an account? <Link to="/register" style={{ color: '#ff6600', fontWeight: 'bold' }}>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
