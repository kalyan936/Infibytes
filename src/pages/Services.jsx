import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <div>
      <section className="hero-section" style={{ paddingBottom: '4rem', background: 'var(--bg-navy)', color: 'var(--text-light)' }}>
        <div className="container">
          <div className="hero-content">
            <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Our Capabilities</span>
            <h1 className="heading-xl" style={{ color: '#fff' }}>Enterprise <span className="text-gradient">Solutions</span></h1>
            <p className="text-lead" style={{ color: 'var(--text-light-muted)' }}>
              Comprehensive technology services designed to architect, build, and scale your digital transformation initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {services.map((service, index) => (
              <div key={service.id} style={{ 
                display: 'grid', 
                gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr', 
                gap: '4rem', 
                alignItems: 'center',
                padding: '3rem',
                background: 'var(--bg-alt)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)'
              }}>
                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: service.color }}>{service.icon}</div>
                  <h2 className="heading-md" style={{ marginBottom: '1rem' }}>{service.title}</h2>
                  <p className="text-lead" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{service.description}</p>
                  
                  <div style={{ marginBottom: '2rem', paddingLeft: '1.5rem', borderLeft: `4px solid ${service.color}` }}>
                    <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>Business Value</h4>
                    <p style={{ fontWeight: 500 }}>{service.businessValue}</p>
                  </div>
                </div>

                <div style={{ order: index % 2 === 0 ? 2 : 1, background: 'var(--bg-card)', padding: '2.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--bg-navy)' }}>Key Capabilities</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {service.capabilities.map((cap, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span style={{ 
                          display: 'flex', alignItems: 'center', justifyContent: 'center', 
                          width: '24px', height: '24px', borderRadius: '50%', 
                          background: `${service.color}22`, color: service.color, 
                          fontSize: '0.8rem', fontWeight: 'bold' 
                        }}>✓</span>
                        <span style={{ fontWeight: 500 }}>{cap}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '2.5rem' }}>
                    <button className="btn" style={{ background: service.color, color: '#fff', width: '100%' }}>Consult With an Expert</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
