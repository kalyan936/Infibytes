const IndustryCard = ({ industry }) => {
  return (
    <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ 
        position: 'absolute', 
        top: '-20px', 
        right: '-20px', 
        width: '100px', 
        height: '100px', 
        background: `radial-gradient(circle, ${industry.color}22 0%, transparent 70%)`,
        borderRadius: '50%'
      }}></div>
      
      <div className="card-icon" style={{ background: `${industry.color}11`, color: industry.color, fontSize: '2.5rem' }}>
        {industry.icon}
      </div>
      <h3 className="card-title">{industry.title}</h3>
      <p className="card-desc" style={{ marginBottom: '2rem' }}>{industry.description}</p>
      
      <div>
        <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Solutions</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {industry.solutions.map((solution, idx) => (
            <span key={idx} style={{ 
              fontSize: '0.8rem', 
              padding: '0.25rem 0.75rem', 
              background: 'var(--bg-alt)', 
              borderRadius: '50px',
              border: '1px solid var(--border)',
              color: 'var(--text-muted)'
            }}>
              {solution}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;
