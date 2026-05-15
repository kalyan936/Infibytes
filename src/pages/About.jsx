import SectionHeader from '../components/SectionHeader';

const About = () => {
  return (
    <div>
      <section className="hero-section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <div className="hero-content">
            <span className="badge">About INFIBYTE TECH</span>
            <h1 className="heading-xl">Empowering the <span className="text-gradient">Intelligent</span> Enterprise.</h1>
            <p className="text-lead">
              We are a premier technology consulting firm specializing in AI, Data Science, and Cloud infrastructure, dedicated to helping organizations navigate and dominate the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="heading-lg">Who We Are</h2>
              <p className="text-lead" style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                INFIBYTE TECH was founded with a singular vision: to bridge the gap between cutting-edge technology and real-world business outcomes.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                We assemble elite teams of AI engineers, data scientists, and cloud architects who work seamlessly with our strategic HR consultants to build comprehensive solutions. We don't just deliver software; we engineer competitive advantages.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Headquartered in Bengaluru, India's tech capital, we serve enterprise clients globally, maintaining a relentless commitment to innovation, quality, and measurable success.
              </p>
            </div>
            <div style={{ 
              background: 'var(--bg-alt)', 
              borderRadius: 'var(--radius-lg)', 
              padding: '3rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span>🎯</span> Our Mission
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  To architect and deliver transformative technology solutions that empower enterprises to operate smarter, scale faster, and lead their industries.
                </p>
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span>👁️</span> Our Vision
                </h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  To be the globally recognized catalyst for enterprise intelligence, where human expertise and artificial intelligence converge to solve the world's most complex business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide our work and define our culture." 
          />
          <div className="grid-3">
            {[
              { icon: '💡', title: 'Relentless Innovation', desc: 'We continuously push boundaries, exploring emerging tech to keep our clients ahead of the curve.' },
              { icon: '🤝', title: 'Client Centricity', desc: 'Your success is our success. We partner deeply to understand your unique challenges and goals.' },
              { icon: '🛡️', title: 'Uncompromising Quality', desc: 'We engineer robust, secure, and scalable solutions that stand the test of enterprise demands.' },
              { icon: '🚀', title: 'Agile Execution', desc: 'We deliver rapid time-to-value through iterative development and responsive delivery methodologies.' },
              { icon: '🧠', title: 'Intellectual Rigor', desc: 'We approach problem-solving with deep analytical thinking and evidence-based strategies.' },
              { icon: '🌐', title: 'Global Perspective', desc: 'We design solutions with global scalability and cultural adaptability in mind.' }
            ].map((value, idx) => (
              <div key={idx} className="card">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{value.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{value.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
