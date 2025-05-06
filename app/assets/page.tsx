import Link from 'next/link';
import { getProjectsByCategory } from '../data/projects';

export default function AssetsPage() {
  const assets = getProjectsByCategory('asset');
  
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">&lt;UNITY ASSETS/&gt;</h1>
      
      <div className="border-2 border-dashed border-black p-4 mb-8 bg-[rgba(0,0,0,0.05)]">
        <p className="mb-2">
          Discover our collection of high-quality tools and assets for Unity. We specialize in performance optimization, procedural generation, and workflow enhancement.
        </p>
        <p className="font-mono text-sm">
          STATUS: INDEXING ASSET DATABASE... COMPLETE!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assets.map(asset => (
          <div key={asset.id} className="retro-card">
            <div className="aspect-video relative w-full border border-black mb-4">
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                [Asset Preview]
              </div>
            </div>
            
            <h2 className="text-xl font-bold border-none pb-0 mb-2">{asset.title}</h2>
            <div className="pixel-divider"></div>
            
            <p className="my-4">{asset.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {asset.tags.map(tag => (
                <span key={tag} className="text-xs border border-black px-2 py-1">{tag}</span>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-sm">Released: {asset.releaseDate}</p>
              {asset.url && (
                <a href={asset.url} target="_blank" rel="noopener noreferrer" className="retro-button">VIEW ON ASSET STORE</a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 border-2 border-black p-6">
        <h2 className="text-2xl font-bold mb-4">&lt;ASSET DEVELOPMENT/&gt;</h2>
        <div className="pixel-divider"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-bold mb-3 border-none pb-0">CUSTOM ASSET CREATION</h3>
            <p className="mb-4">
              Need a specific tool or asset for your Unity project? We create custom solutions tailored to your exact requirements.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Performance optimization tools</li>
              <li>Custom gameplay systems</li>
              <li>Editor extensions</li>
              <li>Technical art tools</li>
            </ul>
            <Link href="/contact" className="retro-button inline-block">REQUEST CUSTOM ASSET</Link>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3 border-none pb-0">ASSET OPTIMIZATION</h3>
            <p className="mb-4">
              We can optimize your existing assets to improve performance, reduce memory usage, and enhance compatibility.
            </p>
            <div className="font-mono border-2 border-dashed border-black p-3 bg-[rgba(0,0,0,0.05)] mb-4 text-sm">
              <p>{`// Sample optimization results`}</p>
              <p>memoryUsage.Before = 120MB;</p>
              <p>memoryUsage.After = 45MB;</p>
              <p>loadTime.Before = 3.2s;</p>
              <p>loadTime.After = 0.8s;</p>
            </div>
            <Link href="/services" className="retro-button inline-block">LEARN MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}