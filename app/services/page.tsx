import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">&lt;OUR SERVICES/&gt;</h1>
      
      <div className="border-2 border-dashed border-black p-4 mb-8 bg-[rgba(0,0,0,0.05)]">
        <p className="mb-2">
          Otomaton provides specialized services in game development, automation, and optimization. We help studios and developers create better games more efficiently.
        </p>
        <p className="font-mono text-sm">
          {`// Select a service category below to learn more`}
        </p>
      </div>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">&lt;GAME DEVELOPMENT/&gt;</h2>
        <div className="retro-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <h3 className="text-xl font-bold border-none pb-0 mb-2">FULL-CYCLE GAME DEVELOPMENT</h3>
              <div className="pixel-divider"></div>
              <p className="my-4">
                We handle all aspects of game development from concept to release. Our experienced team brings your ideas to life with attention to detail and technical excellence.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Game design and prototyping</li>
                <li>Art and animation</li>
                <li>Programming and implementation</li>
                <li>Testing and quality assurance</li>
                <li>Release and post-launch support</li>
              </ul>
              <Link href="/contact" className="retro-button">GET A QUOTE</Link>
            </div>
            <div className="border-2 border-black p-4">
              <h4 className="text-lg font-bold border-none pb-0 mb-2">PLATFORMS</h4>
              <ul className="mb-4">
                <li>• PC/Steam</li>
                <li>• Mobile (iOS/Android)</li>
                <li>• Web (WebGL)</li>
                <li>• Consoles</li>
              </ul>
              <h4 className="text-lg font-bold border-none pb-0 mb-2">TECHNOLOGIES</h4>
              <ul>
                <li>• Unity</li>
                <li>• Unreal Engine</li>
                <li>• Custom Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">&lt;AUTOMATION SOLUTIONS/&gt;</h2>
        <div className="retro-card">
          <h3 className="text-xl font-bold border-none pb-0 mb-2">DEVELOPMENT WORKFLOW AUTOMATION</h3>
          <div className="pixel-divider"></div>
          <p className="my-4">
            We create custom automation tools that streamline your development process, reduce manual work, and improve team efficiency.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-dashed border-black p-4">
              <h4 className="text-lg font-bold border-none pb-0 mb-2">BUILD PIPELINE AUTOMATION</h4>
              <p className="mb-2">Automate your build processes to save time and reduce errors.</p>
              <ul className="list-disc list-inside mb-2 text-sm">
                <li>Continuous integration</li>
                <li>Multi-platform builds</li>
                <li>Asset processing</li>
                <li>Test automation</li>
              </ul>
            </div>
            
            <div className="border-2 border-dashed border-black p-4">
              <h4 className="text-lg font-bold border-none pb-0 mb-2">CONTENT CREATION TOOLS</h4>
              <p className="mb-2">Custom tools to accelerate content creation and iteration.</p>
              <ul className="list-disc list-inside mb-2 text-sm">
                <li>Level design tools</li>
                <li>Asset processing</li>
                <li>Procedural generation</li>
                <li>Batch operations</li>
              </ul>
            </div>
          </div>
          
          <div className="font-mono border-2 border-black p-3 bg-[rgba(0,0,0,0.05)] mb-4 text-sm">
            <p className="font-bold">{`// Automation results from our clients`}</p>
            <p>Build time reduced: 45min → 8min</p>
            <p>Content iteration: 3 days → 4 hours</p>
            <p>Manual work hours saved: ~20hrs/week</p>
          </div>
          
          <Link href="/contact" className="retro-button">DISCUSS YOUR AUTOMATION NEEDS</Link>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">&lt;OPTIMIZATION SERVICES/&gt;</h2>
        <div className="retro-card">
          <h3 className="text-xl font-bold border-none pb-0 mb-2">PERFORMANCE OPTIMIZATION</h3>
          <div className="pixel-divider"></div>
          <p className="my-4">
            We analyze and optimize your games and applications to improve performance, reduce memory usage, and enhance user experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border-2 border-black p-4">
              <h4 className="text-lg font-bold border-none pb-0 mb-2">PERFORMANCE AUDIT</h4>
              <div className="pixel-divider"></div>
              <p className="my-2">Comprehensive analysis of your game&apos;s performance</p>
              <ul className="list-disc list-inside text-sm">
                <li>CPU profiling</li>
                <li>GPU analysis</li>
                <li>Memory usage</li>
                <li>Load times</li>
                <li>Detailed report with recommendations</li>
              </ul>
            </div>
            
            <div className="border-2 border-black p-4">
              <h4 className="text-lg font-bold border-none pb-0 mb-2">OPTIMIZATION IMPLEMENTATION</h4>
              <div className="pixel-divider"></div>
              <p className="my-2">We implement the necessary optimizations</p>
              <ul className="list-disc list-inside text-sm">
                <li>Code optimization</li>
                <li>Asset optimization</li>
                <li>Render pipeline improvements</li>
                <li>Memory management</li>
                <li>Loading optimization</li>
              </ul>
            </div>
            
            <div className="border-2 border-black p-4">
              <h4 className="text-lg font-bold border-none pb-0 mb-2">OPTIMIZATION TRAINING</h4>
              <div className="pixel-divider"></div>
              <p className="my-2">Train your team in performance best practices</p>
              <ul className="list-disc list-inside text-sm">
                <li>Custom workshops</li>
                <li>Best practice documentation</li>
                <li>Performance tools training</li>
                <li>Ongoing support</li>
                <li>Knowledge transfer</li>
              </ul>
            </div>
          </div>
          
          <Link href="/contact" className="retro-button">GET A PERFORMANCE AUDIT</Link>
        </div>
      </section>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6">&lt;CONTACT US/&gt;</h2>
        <p className="mb-6">
          Interested in our services? Contact us to discuss your project requirements and how we can help.
        </p>
        <Link href="/contact" className="retro-button">REQUEST A CONSULTATION</Link>
      </div>
    </div>
  );
}