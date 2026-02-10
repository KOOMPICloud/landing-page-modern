import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="glow" />

      {/* Navbar */}
      <nav className="container flex items-center justify-between" style={{ padding: '24px' }}>
        <div className="flex items-center gap-2">
          <div style={{ width: 32, height: 32, background: 'var(--primary)', borderRadius: 8 }}></div>
          <span className="font-bold text-xl">ModernApp</span>
        </div>
        <div className="flex gap-8 hidden-mobile">
          <a href="#features" className="text-gray hover:text-white">Features</a>
          <a href="#pricing" className="text-gray hover:text-white">Pricing</a>
          <a href="#about" className="text-gray hover:text-white">About</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-white">Login</a>
          <a href="#" className="btn btn-primary" style={{ padding: '8px 16px' }}>Get Started</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container text-center flex flex-col items-center justify-center" style={{ minHeight: '80vh', padding: '100px 24px' }}>
        <div style={{
          padding: '8px 16px',
          background: 'rgba(109, 40, 217, 0.1)',
          border: '1px solid rgba(109, 40, 217, 0.2)',
          borderRadius: 999,
          color: 'var(--accent)',
          marginBottom: 24,
          fontSize: 14,
          fontWeight: 600
        }}>
          ✨ New Version 2.0 Released
        </div>
        <h1 className="text-6xl font-bold" style={{ marginBottom: 24, lineHeight: 1.1 }}>
          Build beautiful apps <br />
          <span className="text-primary-gradient">at warp speed.</span>
        </h1>
        <p className="text-xl text-gray" style={{ maxWidth: 600, marginBottom: 48 }}>
          The ultimate platform for modern developers. Deploy, scale, and manage your applications with a single click. No config required.
        </p>
        <div className="flex gap-4">
          <a href="#" className="btn btn-primary">Start Building Free</a>
          <a href="#" className="btn btn-secondary">View Documentation</a>
        </div>

        {/* Hero Image Mockup */}
        <div style={{
          marginTop: 80,
          width: '100%',
          maxWidth: 1000,
          height: 500,
          background: 'var(--surface)',
          borderRadius: 16,
          border: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 0 100px rgba(0,0,0,0.5)'
        }}>
          <div style={{ padding: 16, borderBottom: '1px solid var(--border)', display: 'flex', gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></div>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></div>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></div>
          </div>
          <div style={{ padding: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <span className="text-gray">App Dashboard Mockup</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container" style={{ padding: '100px 24px' }}>
        <div className="text-center" style={{ marginBottom: 64 }}>
          <h2 className="text-4xl font-bold" style={{ marginBottom: 16 }}>Everything you need</h2>
          <p className="text-gray">Power-packed features for your next big project.</p>
        </div>

        <div className="grid grid-cols-3 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          {[
            { title: 'Lightning Fast', icon: '⚡', desc: 'Optimized for speed with edge network deployment.' },
            { title: 'Secure by Design', icon: '🔒', desc: 'Enterprise-grade security out of the box.' },
            { title: 'Auto Scaling', icon: '🚀', desc: 'Handle traffic spikes without lifting a finger.' },
            { title: 'Real-time Analytics', icon: 'cA', desc: 'Deep insights into your application performance.' },
            { title: 'Global Database', icon: '🌍', desc: 'Replicate data across regions in milliseconds.' },
            { title: '24/7 Support', icon: '💬', desc: 'Our team is here to help you anytime, anywhere.' },
          ].map((feature, i) => (
            <div key={i} className="card">
              <div style={{ fontSize: 32, marginBottom: 16 }}>{feature.icon}</div>
              <h3 className="text-xl font-bold" style={{ marginBottom: 8 }}>{feature.title}</h3>
              <p className="text-gray">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container" style={{ padding: '100px 24px' }}>
        <div className="card text-center" style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
          border: 'none',
          padding: 80
        }}>
          <h2 className="text-4xl font-bold" style={{ marginBottom: 24, color: 'white' }}>Ready to launch?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 40, maxWidth: 600, marginInline: 'auto' }}>
            Join thousands of developers building the future today. Start your free trial now.
          </p>
          <a href="#" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Get Started Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container" style={{ padding: '64px 24px', borderTop: '1px solid var(--border)', marginTop: 80 }}>
        <div className="flex justify-between items-center column-on-mobile">
          <span className="text-gray">© 2024 ModernApp Inc.</span>
          <div className="flex gap-8">
            <a href="#" className="text-gray hover:text-white">Twitter</a>
            <a href="#" className="text-gray hover:text-white">GitHub</a>
            <a href="#" className="text-gray hover:text-white">Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

