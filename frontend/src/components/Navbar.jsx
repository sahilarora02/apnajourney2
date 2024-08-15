import { useState } from "react";
import { useSelector } from "react-redux";import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  const linkStyle = {
    color: 'darkgreen',
    backgroundColor: 'white',
    padding: '8px 12px',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    border: '2px solid darkgreen',
  };

  const linkHoverStyle = {
    ...linkStyle,
    backgroundColor: '#FFD580', // Light orange color
  };

  return (
    <>
      <nav 
        className={show ? "navbar show_navbar" : "navbar"}
        style={{ 
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'white'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
      >
        <div>
          <h1>
            <span style={{ color: 'orange' }}>Apna</span>
            <span style={{ color: 'green' }}>Journey</span>
          </h1>
        </div>
        <div className="links">
          <ul style={{ listStyle: 'none', display: 'flex', gap: '10px' }}>
            <li>
              <Link 
                to={"/"} 
                onClick={() => setShow(!show)}
                style={linkStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to={"/jobs"} 
                onClick={() => setShow(!show)}
                style={linkStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
              >
                PROFILE
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link 
                  to={"/dashboard"} 
                  onClick={() => setShow(!show)}
                  style={linkStyle}
                  onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
                >
                  DASHBOARD
                </Link>
              </li>
            ) : (
              <li>
                <Link 
                  to={"/login"} 
                  onClick={() => setShow(!show)}
                  style={linkStyle}
                  onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
                >
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
