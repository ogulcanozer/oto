import Hero from './components/Hero';
import Services from './components/Services';
import { getProjectsByCategory } from './data/projects';
import Link from 'next/link';

export default function Home() {
  // Getting latest projects for each category
  const games = getProjectsByCategory('game').slice(0, 2);
  const assets = getProjectsByCategory('asset').slice(0, 2);
  
  return (
    <div className="space-y-8">
      <Hero />
      
      <div className="pixel-divider"></div>
      
      <Services />
      
      <div className="pixel-divider"></div>
      
      <section className="py-6">
        <h2 className="text-2xl font-bold mb-6">&lt;FEATURED PROJECTS/&gt;</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4 border-dashed border-b-2 pb-2">GAMES</h3>
            <div className="space-y-4">
              {games.map(game => (
                <div key={game.id} className="retro-card">
                  <h4 className="text-lg font-bold border-none mb-2 pb-0">{game.title}</h4>
                  <p className="text-sm mb-2">{game.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {game.tags.map(tag => (
                      <span key={tag} className="text-xs border border-black px-2 py-1">{tag}</span>
                    ))}
                  </div>
                  <p className="text-xs mb-2">Released: {game.releaseDate}</p>
                  {game.url && (
                    <a href={game.url} target="_blank" rel="noopener noreferrer" className="retro-button inline-block text-sm">VIEW GAME</a>
                  )}
                </div>
              ))}
              <div className="text-center mt-4">
                <Link href="/games" className="retro-button inline-block">VIEW ALL GAMES</Link>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-dashed border-b-2 pb-2">ASSETS</h3>
            <div className="space-y-4">
              {assets.map(asset => (
                <div key={asset.id} className="retro-card">
                  <h4 className="text-lg font-bold border-none mb-2 pb-0">{asset.title}</h4>
                  <p className="text-sm mb-2">{asset.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {asset.tags.map(tag => (
                      <span key={tag} className="text-xs border border-black px-2 py-1">{tag}</span>
                    ))}
                  </div>
                  <p className="text-xs mb-2">Released: {asset.releaseDate}</p>
                  {asset.url && (
                    <a href={asset.url} target="_blank" rel="noopener noreferrer" className="retro-button inline-block text-sm">VIEW ASSET</a>
                  )}
                </div>
              ))}
              <div className="text-center mt-4">
                <Link href="/assets" className="retro-button inline-block">VIEW ALL ASSETS</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="pixel-divider"></div>
      
      <section className="py-6">
        <div className="retro-card">
          <h2 className="text-2xl font-bold mb-4">&lt;HIRE US/&gt;</h2>
          <p className="mb-4">
            Looking for custom game development, tools, or optimization services? We provide tailored solutions for studios of all sizes.
          </p>
          <p className="font-mono border-2 border-dashed border-black p-4 bg-[rgba(0,0,0,0.05)] mb-4">
            <span className="font-bold">$ contact.sh</span><br/>
            Initializing...<br/>
            Connecting to Otomaton services...<br/>
            Ready to discuss your project requirements!<br/>
          </p>
          <Link href="/contact" className="retro-button inline-block">GET IN TOUCH</Link>
        </div>
      </section>
      
      <div className="pixel-divider"></div>
      
      <section className="py-6 text-center">
        <div className="border-2 border-dashed border-black p-4">
          <p className="text-sm">
            <span className="font-bold">VISITOR COUNTER:</span> <span className="font-mono bg-black text-[lime] px-2 py-1">1337</span>
          </p>
          <p className="text-xs mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>
    </div>
  );
}