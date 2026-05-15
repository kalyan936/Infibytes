import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { industries } from '../data/industries';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-glow"></div>
        <div className="container">
          <div className="hero-content animate-fade-in">
            <span className="badge">Enterprise Technology Partner</span>
            <h1 className="heading-xl">
              Engineering the <span className="text-gradient">Future</span> of Enterprise Intelligence.
            </h1>
            <p className="text-lead" style={{ marginBottom: '2.5rem' }}>
              We design, build, and deploy enterprise-grade AI, Data, and Cloud solutions that transform operations and unlock exponential business value.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Partner With Us</Link>
              <Link to="/services" className="btn btn-outline">Explore Capabilities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="section">
        <div className="container">
          <SectionHeader 
            title="Core Capabilities" 
            subtitle="End-to-end technology solutions tailored for complex enterprise ecosystems."
            badge="Our Services"
          />
          <div className="grid-3">
            {services.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section className="section section-navy">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>The INFIBYTE Advantage</span>
              <h2 className="heading-lg" style={{ color: '#fff' }}>Delivering Measurable Impact at Scale.</h2>
              <p className="text-lead" style={{ marginBottom: '2rem' }}>
                We combine deep technical expertise with industry domain knowledge to deliver solutions that are not just technically sound, but strategically aligned with your business objectives.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary-light)', fontSize: '1.25rem' }}>✦</span>
                  <span><strong>Enterprise-Ready:</strong> Solutions architected for scale, security, and compliance.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--secondary)', fontSize: '1.25rem' }}>✦</span>
                  <span><strong>Result-Driven:</strong> Focus on ROI, operational efficiency, and tangible business outcomes.</span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary-light)', fontSize: '1.25rem' }}>✦</span>
                  <span><strong>Future-Proof:</strong> Leveraging cutting-edge AI and cloud-native architectures.</span>
                </li>
              </ul>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>99%</h3>
                <p style={{ color: 'var(--text-light-muted)' }}>Project Success Rate</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)', transform: 'translateY(20px)' }}>
                <h3 style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>50+</h3>
                <p style={{ color: 'var(--text-light-muted)' }}>Enterprise Clients</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '3rem', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>24/7</h3>
                <p style={{ color: 'var(--text-light-muted)' }}>Dedicated Support</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.1)', transform: 'translateY(20px)' }}>
                <h3 style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>10x</h3>
                <p style={{ color: 'var(--text-light-muted)' }}>ROI Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="section">
        <div className="container">
          <SectionHeader 
            title="Industry Expertise" 
            subtitle="Tailored technology solutions designed for the unique challenges of your sector."
            badge="Sectors We Serve"
          />
          <div className="grid-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            {industries.slice(0, 4).map(ind => (
              <div key={ind.id} style={{ 
                padding: '2rem', 
                background: 'var(--bg-alt)', 
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                textAlign: 'center',
                transition: 'var(--transition)'
              }} className="hover-lift">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{ind.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{ind.title}</h3>
                <Link to="/industries" style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600 }}>Explore Solutions →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ 
            background: 'var(--gradient-brand)', 
            borderRadius: 'var(--radius-xl)', 
            padding: '5rem 3rem',
            textAlign: 'center',
            color: 'var(--text-light)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px', margin: '0 auto' }}>
              <h2 className="heading-lg" style={{ color: '#fff' }}>Ready to Transform Your Business?</h2>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2.5rem' }}>
                Let's discuss how INFIBYTE TECH can accelerate your digital transformation journey.
              </p>
              <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--bg-navy)', padding: '1rem 3rem', fontSize: '1.125rem' }}>
                Schedule a Consultation
              </Link>
            </div>
            
            {/* Decorative background elements */}
            <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 1 }}></div>
            <div style={{ position: 'absolute', bottom: '-50%', right: '-10%', width: '400px', height: '400px', background: 'rgba(0,0,0,0.1)', borderRadius: '50%', zIndex: 1 }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
