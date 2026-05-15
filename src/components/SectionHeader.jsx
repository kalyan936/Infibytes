const SectionHeader = ({ title, subtitle, align = 'center', badge }) => {
  return (
    <div style={{ textAlign: align, marginBottom: '4rem', maxWidth: align === 'center' ? '800px' : '100%', margin: align === 'center' ? '0 auto 4rem' : '0 0 4rem' }}>
      {badge && <span className="badge">{badge}</span>}
      <h2 className="heading-lg">{title}</h2>
      {subtitle && <p className="text-lead" style={{ margin: align === 'center' ? '0 auto' : '0' }}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
