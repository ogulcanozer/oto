export default function Services() {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-6">&lt;OUR SERVICES/&gt;</h2>
      
      <div className="retro-grid">
        <div className="retro-card">
          <h3 className="font-bold text-xl border-none pb-0 mb-2">GAME DEVELOPMENT</h3>
          <div className="pixel-divider"></div>
          <p className="mt-2 mb-4">
            We create engaging games for Steam and other platforms. From concept to release, we handle the full development lifecycle.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Steam releases</li>
            <li>Mobile games</li>
            <li>WebGL experiences</li>
            <li>Custom game solutions</li>
          </ul>
          <button className="retro-button text-sm">LEARN MORE</button>
        </div>
        
        <div className="retro-card">
          <h3 className="font-bold text-xl border-none pb-0 mb-2">UNITY ASSETS</h3>
          <div className="pixel-divider"></div>
          <p className="mt-2 mb-4">
            We develop high-quality assets and tools for the Unity Asset Store to help other developers create games more efficiently.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Game frameworks</li>
            <li>Editor extensions</li>
            <li>Optimization tools</li>
            <li>Visual effects</li>
          </ul>
          <button className="retro-button text-sm">BROWSE ASSETS</button>
        </div>
        
        <div className="retro-card">
          <h3 className="font-bold text-xl border-none pb-0 mb-2">AUTOMATION TOOLS</h3>
          <div className="pixel-divider"></div>
          <p className="mt-2 mb-4">
            We build custom automation solutions that streamline workflows and increase productivity for game development teams.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Build pipelines</li>
            <li>Content generation</li>
            <li>Testing frameworks</li>
            <li>Development workflows</li>
          </ul>
          <button className="retro-button text-sm">EXPLORE TOOLS</button>
        </div>
        
        <div className="retro-card">
          <h3 className="font-bold text-xl border-none pb-0 mb-2">OPTIMIZATION</h3>
          <div className="pixel-divider"></div>
          <p className="mt-2 mb-4">
            We help optimize existing games and applications for better performance, faster loading times, and smoother gameplay.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Performance audits</li>
            <li>Memory optimization</li>
            <li>CPU/GPU profiling</li>
            <li>Load time reduction</li>
          </ul>
          <button className="retro-button text-sm">GET A QUOTE</button>
        </div>
      </div>
    </section>
  );
}