import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  return (
    <div>
      <section className="hero-section" style={{ paddingBottom: '4rem', background: 'var(--bg-navy)', color: 'var(--text-light)' }}>
        <div className="container">
          <div className="hero-content">
            <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}>Get In Touch</span>
            <h1 className="heading-xl" style={{ color: '#fff' }}>Let's Start a <span className="text-gradient">Conversation</span>.</h1>
            <p className="text-lead" style={{ color: 'var(--text-light-muted)' }}>
              Whether you need strategic consulting or complex engineering solutions, our experts are ready to assist you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Contact Information</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ 
                    width: '50px', height: '50px', borderRadius: '50%', 
                    background: 'var(--primary)', color: '#fff', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', flexShrink: 0
                  }}>📍</div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Headquarters</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      #52, 3rd Cross, Aswath Nagar,<br/>
                      Marathahalli, Bengaluru,<br/>
                      Karnataka-560037
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ 
                    width: '50px', height: '50px', borderRadius: '50%', 
                    background: 'var(--secondary)', color: '#fff', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.5rem', flexShrink: 0
                  }}>✉️</div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Email Us</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                      <a href="mailto:hr@infibytetech.com" style={{ color: 'inherit' }}>hr@infibytetech.com</a>
                    </p>
                    <p style={{ color: 'var(--text-muted)' }}>
                      <a href="mailto:manjunath@infibytetech.com" style={{ color: 'inherit' }}>manjunath@infibytetech.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div style={{ 
                width: '100%', height: '300px', 
                background: 'var(--bg-alt)', 
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '1rem'
              }}>
                <span style={{ fontSize: '3rem', opacity: 0.5 }}>🗺️</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Interactive Map Location</span>
              </div>
            </div>

            <div style={{ 
              background: 'var(--bg-card)', 
              padding: '3rem', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)'
            }}>
              <h2 className="heading-md" style={{ marginBottom: '2rem' }}>Send Us a Message</h2>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>First Name</label>
                    <input type="text" placeholder="John" style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg-alt)', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg-alt)', outline: 'none' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Work Email</label>
                  <input type="email" placeholder="john@company.com" style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg-alt)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Inquiry Type</label>
                  <select style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg-alt)', outline: 'none' }}>
                    <option>General Inquiry</option>
                    <option>HR Consulting</option>
                    <option>AI & Data Solutions</option>
                    <option>Cloud Infrastructure</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '0.875rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg-alt)', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Submit Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
