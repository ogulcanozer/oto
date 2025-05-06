"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    service: 'games',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        service: 'games',
      });
    }, 1500);
  };
  
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">&lt;CONTACT US/&gt;</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="retro-card">
            <h2 className="text-2xl font-bold mb-4">GET IN TOUCH</h2>
            <div className="pixel-divider"></div>
            
            <p className="my-4">
              Have a project in mind or questions about our services? We&apos;d love to hear from you! Fill out the form, and our team will get back to you within 48 hours.
            </p>
            
            <div className="my-6 space-y-4">
              <div className="border-2 border-dashed border-black p-4">
                <h3 className="text-lg font-bold border-none pb-0 mb-1">EMAIL</h3>
                <p><a href="mailto:info@otomaton.com">info@otomaton.com</a></p>
              </div>
              
              <div className="border-2 border-dashed border-black p-4">
                <h3 className="text-lg font-bold border-none pb-0 mb-1">SOCIALS</h3>
                <ul className="space-y-1">
                  <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter: @otomaton</a></li>
                  <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord: discord.gg/otomaton</a></li>
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub: github.com/otomaton</a></li>
                </ul>
              </div>
            </div>
            
            <div className="font-mono border-2 border-black p-4 bg-[rgba(0,0,0,0.05)]">
              <p className="text-sm">
                <span className="font-bold">$ response-time.sh</span><br/>
                Calculating average response times...<br/>
                Email inquiries: 24-48 hours<br/>
                Project quotes: 2-5 business days<br/>
                Support tickets: 24 hours<br/>
              </p>
            </div>
          </div>
          
          <div className="retro-card mt-8">
            <h2 className="text-2xl font-bold mb-4">WORK WITH US</h2>
            <div className="pixel-divider"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="border-2 border-black p-4">
                <h3 className="text-lg font-bold border-none pb-0 mb-2">GAME DEVELOPMENT</h3>
                <p className="text-sm mb-2">Full-cycle game development for various platforms.</p>
                <p className="text-xs">Starting at $25,000</p>
              </div>
              
              <div className="border-2 border-black p-4">
                <h3 className="text-lg font-bold border-none pb-0 mb-2">UNITY ASSETS</h3>
                <p className="text-sm mb-2">Custom tools and assets for Unity projects.</p>
                <p className="text-xs">Starting at $5,000</p>
              </div>
              
              <div className="border-2 border-black p-4">
                <h3 className="text-lg font-bold border-none pb-0 mb-2">AUTOMATION</h3>
                <p className="text-sm mb-2">Custom automation solutions for your workflow.</p>
                <p className="text-xs">Starting at $8,000</p>
              </div>
              
              <div className="border-2 border-black p-4">
                <h3 className="text-lg font-bold border-none pb-0 mb-2">OPTIMIZATION</h3>
                <p className="text-sm mb-2">Performance audits and optimization services.</p>
                <p className="text-xs">Starting at $3,000</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="retro-card">
          <h2 className="text-2xl font-bold mb-4">CONTACT FORM</h2>
          <div className="pixel-divider"></div>
          
          {isSubmitted ? (
            <div className="my-8 p-6 border-2 border-dashed border-black text-center">
              <h3 className="text-xl font-bold border-none pb-0 mb-4">MESSAGE SENT!</h3>
              <p className="mb-4">Thank you for reaching out. We&apos;ll be in touch soon!</p>
              <p className="font-mono text-sm">
                * * * TRANSMISSION SUCCESSFUL * * *<br/>
                Message ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </p>
              <button 
                className="retro-button mt-6"
                onClick={() => setIsSubmitted(false)}
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block font-bold mb-1" htmlFor="name">YOUR NAME:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-2 font-mono bg-transparent"
                />
              </div>
              
              <div>
                <label className="block font-bold mb-1" htmlFor="email">EMAIL ADDRESS:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-2 font-mono bg-transparent"
                />
              </div>
              
              <div>
                <label className="block font-bold mb-1" htmlFor="service">SERVICE NEEDED:</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-2 font-mono bg-transparent"
                >
                  <option value="games">Game Development</option>
                  <option value="assets">Unity Assets</option>
                  <option value="automation">Automation Tools</option>
                  <option value="optimization">Optimization</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block font-bold mb-1" htmlFor="subject">SUBJECT:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-2 font-mono bg-transparent"
                />
              </div>
              
              <div>
                <label className="block font-bold mb-1" htmlFor="message">MESSAGE:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-2 font-mono bg-transparent resize-none"
                ></textarea>
              </div>
              
              <div>
                <label className="block font-bold mb-1" htmlFor="budget">BUDGET (OPTIONAL):</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border-2 border-black p-2 font-mono bg-transparent"
                  placeholder="e.g. $5,000 - $10,000"
                />
              </div>
              
              <div className="border-2 border-dashed border-black p-3 bg-[rgba(0,0,0,0.05)]">
                <p className="text-sm font-mono">
                  By submitting this form, you agree to our privacy policy. We&apos;ll only use your information to respond to your inquiry.
                </p>
              </div>
              
              <div className="text-center mt-6">
                <button 
                  type="submit" 
                  className="retro-button px-8 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      
      <div className="text-center mt-12 font-mono border-2 border-dashed border-black p-4">
        <p className="text-sm">
          RESPONSE STATUS: ONLINE | CURRENT WORKLOAD: HIGH | ACCEPTING NEW PROJECTS: YES
        </p>
      </div>
    </div>
  );
}