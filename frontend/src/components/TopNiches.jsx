// React import removed as it's not used in this component
const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Networking",
      description:
        "Targets established companies looking to enhance their market presence, streamline profile management, and engage with industry peers and potential clients.",
    },
    {
      id: 2,
      service: "Startup Ecosystems",
      description:
        "Focuses on emerging startups, providing a platform for new businesses to establish and promote their profiles, connect with investors, and network with other entrepreneurs.",
    },
    {
      id: 3,
      service: "Professional Services",
      description:
        "Assists firms in sectors like legal, accounting, and consulting by allowing them to manage detailed profiles, showcase services, and connect with potential clients.",
    },
  ];

  return (
    <section className="services">
      <h3 style={{ color: 'darkgreen' }}>Prime Focus</h3>
      <div className="grid">
        {services.map((element) => {
          return (
            <div 
              className="card" 
              key={element.id}
              style={{ transition: 'background-color 0.3s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fab260'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              <h4>{element.service}</h4>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;
