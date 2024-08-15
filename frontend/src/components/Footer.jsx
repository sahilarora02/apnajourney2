import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  const linkStyle = {
    color: 'white',
    transition: 'color 0.3s ease',
  };

  const linkHoverStyle = {
    color: 'orange',
  };

  return (
    <>
      <footer>
        <div>
          <p>
            <span style={{ fontSize: '3.5em' }}>
              <span style={{ color: 'orange' }}>Apna</span>
              <span style={{ color: 'green' }}>Journey</span>
            </span>
          </p>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>ApnaJourney02@gmail.com</li>
            <li>+91 7371083339</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link 
                to={"/"}
                style={linkStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to={"/jobs"}
                style={linkStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
              >
                Profile
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link 
                  to={"/dashboard"}
                  style={linkStyle}
                  onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                  onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link 
                to={"/"}
                style={linkStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
              >
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link 
                to={"https://www.linkedin.com/in/anandsingh76/"}
                style={linkStyle}
                onMouseEnter={(e) => Object.assign(e.target.style, linkHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.target.style, linkStyle)}
              >
                <span>
                  <FaLinkedin/>
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        © CopyRight 2024. All Rights Reserved By ApnaJourney
      </div>
    </>
  );
};

export default Footer;
