import Link from 'next/link';
import { getProjectsByCategory } from '../data/projects';

export default function GamesPage() {
  const games = getProjectsByCategory('game');
  
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">&lt;OUR GAMES/&gt;</h1>
      
      <div className="border-2 border-dashed border-black p-4 mb-8 bg-[rgba(0,0,0,0.05)]">
        <p className="mb-2">
          Welcome to our games showcase! At Otomaton, we create engaging, innovative gaming experiences for various platforms. Browse our portfolio below.
        </p>
        <p className="font-mono text-sm">
          STATUS: LOADING GAME DATABASE... COMPLETE!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map(game => (
          <div key={game.id} className="retro-card">
            <div className="aspect-video relative w-full border border-black mb-4">
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                [Game Screenshot]
              </div>
            </div>
            
            <h2 className="text-xl font-bold border-none pb-0 mb-2">{game.title}</h2>
            <div className="pixel-divider"></div>
            
            <p className="my-4">{game.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {game.tags.map(tag => (
                <span key={tag} className="text-xs border border-black px-2 py-1">{tag}</span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-sm">Released: {game.releaseDate}</p>
              {game.url && (
                <a href={game.url} target="_blank" rel="noopener noreferrer" className="retro-button">VIEW ON STEAM</a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 border-2 border-black p-6">
        <h2 className="text-2xl font-bold mb-4">&lt;UPCOMING RELEASES/&gt;</h2>
        <div className="pixel-divider"></div>
        
        <div className="mt-4 p-4 border-2 border-dashed border-black">
          <p className="font-mono text-center">
            * * * STAY TUNED FOR MORE EXCITING GAMES * * *<br/>
            Follow us on social media for announcements!
          </p>
        </div>
        
        <div className="text-center mt-8">
          <Link href="/contact" className="retro-button">CONTACT US FOR CUSTOM GAME DEVELOPMENT</Link>
        </div>
      </div>
    </div>
  );
}