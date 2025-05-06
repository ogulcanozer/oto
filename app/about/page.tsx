import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">&lt;ABOUT OTOMATON/&gt;</h1>
      
      <div className="retro-card">
        <h2 className="text-2xl font-bold mb-4">OUR STORY</h2>
        <div className="pixel-divider"></div>
        
        <p className="my-4">
          Otomaton was founded by a team of passionate game developers and engineers with a shared vision: to create exceptional games and tools that push the boundaries of what&apos;s possible.
        </p>
        
        <p className="my-4">
          Our journey began with a simple game prototype that evolved into something much bigger. Along the way, we developed specialized tools for our own workflow that proved so valuable we decided to share them with the game development community.
        </p>
        
        <p className="my-4">
          Today, we operate at the intersection of creative game development and technical innovation, continuously refining our craft and expanding our capabilities.
        </p>
        
        <div className="border-2 border-dashed border-black p-4 my-6 bg-[rgba(0,0,0,0.05)]">
          <p className="font-mono">
            <span className="font-bold">$ otomaton --version</span><br/>
            Otomaton v5.0.3<br/>
            Founded: 2018<br/>
            Games Released: 8<br/>
            Assets Published: 15<br/>
            Custom Tools: 24+<br/>
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="retro-card">
          <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
          <div className="pixel-divider"></div>
          
          <p className="my-4">
            At Otomaton, our mission is to create exceptional games that deliver meaningful experiences, while developing innovative tools that empower other creators to realize their vision more efficiently.
          </p>
          
          <p className="my-4">
            We believe in:
          </p>
          
          <ul className="list-disc list-inside mb-4">
            <li>Technical excellence in everything we do</li>
            <li>Continuous innovation and improvement</li>
            <li>Sharing knowledge and tools with the community</li>
            <li>Creating games with depth and lasting impact</li>
            <li>Optimizing workflows to enhance creativity</li>
          </ul>
        </div>
        
        <div className="retro-card">
          <h2 className="text-2xl font-bold mb-4">OUR TEAM</h2>
          <div className="pixel-divider"></div>
          
          <p className="my-4">
            We&apos;re a diverse team of programmers, artists, designers, and problem solvers who share a passion for games and technology.
          </p>
          
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="border-2 border-black p-3">
              <h3 className="text-lg font-bold border-none pb-0 mb-1">DEVELOPERS</h3>
              <p className="text-sm">Game programmers, engine specialists, and tool developers who bring functionality to life.</p>
            </div>
            
            <div className="border-2 border-black p-3">
              <h3 className="text-lg font-bold border-none pb-0 mb-1">DESIGNERS</h3>
              <p className="text-sm">Game designers, UI/UX specialists, and level designers who craft engaging experiences.</p>
            </div>
            
            <div className="border-2 border-black p-3">
              <h3 className="text-lg font-bold border-none pb-0 mb-1">ARTISTS</h3>
              <p className="text-sm">Visual artists, animators, and audio designers who create compelling worlds.</p>
            </div>
            
            <div className="border-2 border-black p-3">
              <h3 className="text-lg font-bold border-none pb-0 mb-1">SPECIALISTS</h3>
              <p className="text-sm">Optimization experts, automation engineers, and QA specialists who perfect our products.</p>
            </div>
          </div>
          
          <p className="my-4">
            Together, we form a highly collaborative team where innovation thrives and technical challenges become opportunities.
          </p>
        </div>
      </div>
      
      <div className="retro-card mt-8">
        <h2 className="text-2xl font-bold mb-4">OUR TECH STACK</h2>
        <div className="pixel-divider"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div>
            <h3 className="text-xl font-bold border-none pb-0 mb-2">GAME DEVELOPMENT</h3>
            <ul className="list-disc list-inside">
              <li>Unity Engine</li>
              <li>Unreal Engine</li>
              <li>Custom Engine Technology</li>
              <li>C#, C++</li>
              <li>HLSL/GLSL Shaders</li>
              <li>WebGL / JavaScript</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold border-none pb-0 mb-2">ASSET DEVELOPMENT</h3>
            <ul className="list-disc list-inside">
              <li>Unity Editor Extensions</li>
              <li>C# / .NET</li>
              <li>Custom DSLs</li>
              <li>UI Frameworks</li>
              <li>Visual Scripting</li>
              <li>Rendering Pipelines</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold border-none pb-0 mb-2">AUTOMATION</h3>
            <ul className="list-disc list-inside">
              <li>CI/CD Pipelines</li>
              <li>Custom Build Systems</li>
              <li>Python</li>
              <li>PowerShell / Bash</li>
              <li>Docker</li>
              <li>Cloud Infrastructure</li>
            </ul>
          </div>
        </div>
        
        <div className="font-mono border-2 border-dashed border-black p-4 bg-[rgba(0,0,0,0.05)] my-4">
          <p>
            <span className="font-bold">{`// We're always learning and evolving`}</span><br/>
            const techStack = [&apos;current&apos;, &apos;emerging&apos;, &apos;experimental&apos;];<br/>
            const approach = &apos;right-tool-for-the-job&apos;;<br/>
            const focus = &apos;performance-and-reliability&apos;;<br/>
          </p>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-6">&lt;WORK WITH US/&gt;</h2>
        <p className="mb-6">
          Interested in joining our team or working with us on your next project?
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact" className="retro-button">CONTACT US</Link>
          <a href="mailto:jobs@otomaton.com" className="retro-button">CAREERS</a>
        </div>
      </div>
    </div>
  );
}