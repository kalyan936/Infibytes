import SectionHeader from '../components/SectionHeader';

const Careers = () => {
  const openRoles = [
    { title: 'HR Recruiter', department: 'Operations', location: 'Bengaluru, India / Hybrid', type: 'Full-time' },
    { title: 'AI Engineer', department: 'Engineering', location: 'Bengaluru, India / Remote', type: 'Full-time' },
    { title: 'Data Scientist', department: 'Data & AI', location: 'Bengaluru, India / Remote', type: 'Full-time' },
    { title: 'Data Engineer', department: 'Engineering', location: 'Bengaluru, India / Hybrid', type: 'Full-time' },
    { title: 'DevOps Engineer', department: 'Infrastructure', location: 'Bengaluru, India / Remote', type: 'Full-time' },
    { title: 'Technical Support Engineer', department: 'Customer Success', location: 'Bengaluru, India', type: 'Full-time' }
  ];

  return (
    <div>
      <section className="hero-section" style={{ paddingBottom: '4rem', background: 'var(--gradient-brand)', color: 'var(--text-light)' }}>
        <div className="container">
          <div className="hero-content">
            <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>Join Our Team</span>
            <h1 className="heading-xl" style={{ color: '#fff' }}>Build the Future of Intelligence.</h1>
            <p className="text-lead" style={{ color: 'rgba(255,255,255,0.9)' }}>
              We are always looking for exceptional talent to join our mission. If you are passionate about AI, data, and solving complex problems, you belong here.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader 
            title="Life at INFIBYTE TECH" 
            subtitle="A culture built on innovation, continuous learning, and high performance." 
          />
          <div className="grid-3">
            {[
              { icon: '🚀', title: 'Impactful Work', desc: 'Work on cutting-edge AI and Data projects that drive real transformation for top global enterprises.' },
              { icon: '📚', title: 'Continuous Learning', desc: 'Access to premium learning resources, certifications, and dedicated time for R&D and upskilling.' },
              { icon: '🤝', title: 'Collaborative Environment', desc: 'Work alongside elite engineers and consultants in a flat, meritocratic, and highly supportive culture.' }
            ].map((perk, idx) => (
              <div key={idx} style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{perk.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{perk.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader 
            title="Open Positions" 
            subtitle="Explore our current openings and find your next big opportunity." 
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            {openRoles.map((role, idx) => (
              <div key={idx} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '2rem', 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                transition: 'var(--transition)'
              }} className="hover-border-primary">
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{role.title}</h3>
                  <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <span>💼 {role.department}</span>
                    <span>📍 {role.location}</span>
                    <span>⏱️ {role.type}</span>
                  </div>
                </div>
                <div>
                  <button className="btn btn-outline" style={{ padding: '0.5rem 1.5rem' }}>Apply Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
