export default function Hero() {
  return (
    <section className="py-6">
      <div className="retro-card">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          &lt;WELCOME TO OTOMATON/&gt;
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <p className="mb-4 text-lg">
              We build <span className="text-[var(--primary)]">&lt;GAMES&gt;</span>, create <span className="text-[var(--secondary)]">&lt;ASSETS&gt;</span>, and develop <span className="text-[var(--accent)]">&lt;TOOLS&gt;</span> for optimization and automation.
            </p>
            
            <div className="border-2 border-dashed border-black p-4 bg-[rgba(0,0,0,0.05)] font-mono my-4">
              <p className="font-bold mb-2">{`// Our Tech Stack`}</p>
              <code className="text-sm">
                import &#123; Expertise &#125; from &apos;./gamedev&apos;;<br/>
                const technologies = [<br/>
                &nbsp;&nbsp;&apos;Unity&apos;, &apos;Unreal&apos;, &apos;WebGL&apos;,<br/>
                &nbsp;&nbsp;&apos;C#&apos;, &apos;C++&apos;, &apos;JavaScript&apos;,<br/>
                &nbsp;&nbsp;&apos;Automation&apos;, &apos;Optimization&apos;<br/>
                ];<br/>
                <br/>
                export function DeliverQuality() &#123;<br/>
                &nbsp;&nbsp;return technologies.map(tech =&gt; Expertise(tech));<br/>
                &#125;
              </code>
            </div>
            
            <div className="flex gap-4 mt-6">
              <button className="retro-button">VIEW PORTFOLIO</button>
              <button className="retro-button">CONTACT US</button>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="border-2 border-black p-4 relative">
              <div className="bg-[var(--primary)] text-white px-2 py-1 inline-block absolute top-0 right-0 border-l-2 border-b-2 border-black text-sm">
                NEW!
              </div>
              <p className="font-bold mb-2">LATEST RELEASE</p>
              <div className="aspect-video relative w-full border border-black mb-2">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  [Game Screenshot]
                </div>
              </div>
              <p className="text-sm mb-2">Our latest game is now available on Steam!</p>
              <button className="retro-button w-full text-sm">VIEW ON STEAM</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}