import SectionHeader from '../components/SectionHeader';
import IndustryCard from '../components/IndustryCard';
import { industries } from '../data/industries';

const Industries = () => {
  return (
    <div>
      <section className="hero-section" style={{ paddingBottom: '4rem', background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="hero-content">
            <span className="badge">Industries We Serve</span>
            <h1 className="heading-xl">Transforming <span className="text-gradient">Sectors</span> with AI.</h1>
            <p className="text-lead">
              We deliver domain-specific intelligence and automated workflows that address the unique regulatory, operational, and competitive challenges of your industry.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {industries.map(industry => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="heading-lg" style={{ color: '#fff', marginBottom: '1.5rem' }}>Don't see your industry?</h2>
            <p className="text-lead" style={{ margin: '0 auto 2.5rem' }}>
              Our fundamental technologies—AI Agents, Data Engineering, and Cloud Infrastructure—are highly adaptable to any complex enterprise environment.
            </p>
            <button className="btn btn-primary">Discuss Your Specific Needs</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
