// React import removed as it's not used in this componentimport { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

import { LuUserPlus } from "react-icons/lu";
// import { VscTasklist } from "react-icons/vsc";import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  const cardStyle = {
    backgroundColor: 'white',
    transition: 'all 0.3s ease',
  };

  const cardHoverStyle = {
    backgroundColor: '#90EE90',
  };

  const descriptionStyle = {
    color: 'darkorange',
    transition: 'color 0.3s ease',
  };

  return (
    <section className="howItWorks">
      <h3 style={{ color: 'darkgreen' }}>How does it work?</h3>
      <div className="container">
        {[
          { icon: <LuUserPlus />, title: "Create an Account", description: "Sign up for a free account on Apna Journey as a business or startup. Set up your company profile in just a few minutes to start showcasing your details. Customize your profile to highlight your strengths and unique offerings." },
          { icon: <VscTasklist />, title: "Preview", description: "Preview your profile and customize it to perfectly reflect your business's unique identity. Feel free to make adjustments and update details as needed, ensuring your profile always showcases the most accurate and engaging information about your company." },
          { icon: <BiSolidLike />, title: "Networking", description: "Unlock new opportunities and grow your business through our robust networking capabilities. Our platform facilitates seamless interactions, helping you build a strong professional network and drive your business forward." },
        ].map((item, index) => (
          <div 
            key={index}
            className="card" 
            style={cardStyle}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, cardHoverStyle);
              e.currentTarget.querySelector('p').style.color = 'black';
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, cardStyle);
              e.currentTarget.querySelector('p').style.color = 'darkorange';
            }}
          >
            <div className="icon" style={{ color: 'orange' }}>
              {item.icon}
            </div>
            <h4 style={{ color: 'darkgreen' }}>{item.title}</h4>
            <p style={descriptionStyle}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
