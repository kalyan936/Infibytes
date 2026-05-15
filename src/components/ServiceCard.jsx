import { Link } from 'react-router-dom';

const ServiceCard = ({ service, detailed = false }) => {
  return (
    <div className="card" style={{ borderTop: `4px solid ${service.color}` }}>
      <div className="card-icon" style={{ color: service.color }}>
        {service.icon}
      </div>
      <h3 className="card-title">{service.title}</h3>
      <p className="card-desc">
        {detailed ? service.description : service.shortDesc}
      </p>
      
      {detailed && (
        <>
          <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'var(--bg-alt)', borderRadius: 'var(--radius)' }}>
            <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Business Value</h4>
            <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>{service.businessValue}</p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1rem', letterSpacing: '0.05em' }}>Key Capabilities</h4>
            <ul style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.5rem' }}>
              {service.capabilities.map((cap, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <span style={{ color: service.color }}>✓</span> {cap}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      <Link to="/services" className="card-link" style={{ color: service.color }}>
        Learn More <span>→</span>
      </Link>
    </div>
  );
};

export default ServiceCard;
