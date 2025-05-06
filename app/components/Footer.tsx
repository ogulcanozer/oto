import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black p-4 mt-8">
      <div className="pixel-divider"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div>
          <h3 className="text-lg font-bold mb-2 border-b-0 pb-0">&lt;SITEMAP/&gt;</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/games">Games</Link></li>
            <li><Link href="/assets">Assets</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-2 border-b-0 pb-0">&lt;CONNECT/&gt;</h3>
          <ul className="space-y-1">
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer">Steam</a></li>
            <li><a href="https://assetstore.unity.com" target="_blank" rel="noopener noreferrer">Unity Asset Store</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-2 border-b-0 pb-0">&lt;INFO/&gt;</h3>
          <p className="mb-2">Otomaton Game Development</p>
          <p className="mb-2">Games • Assets • Automation • Tools</p>
          <p>© {currentYear} Otomaton. All rights reserved.</p>
        </div>
      </div>
      
      <div className="text-center mt-6 text-sm">
        <p className="font-mono">[ This site was built with Next.js and React ]</p>
        <p className="font-mono mt-1">[ Optimized for Netscape Navigator 4.0+ ]</p>
      </div>
    </footer>
  );
}