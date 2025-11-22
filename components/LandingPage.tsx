
import React from 'react';
import { GlitchText } from './GlitchText';
import { ScannerGrid } from './ScannerGrid';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageAsset, AppState } from '../types';
import { ArrowRight, Zap, Sliders, Download, Check } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: AppState) => void;
}

const DEMO_IMAGES: ImageAsset[] = [
  {
    id: '1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnWpvawsUVZll6CjqIB5Bn6c537nWxZ_m_XzfsD_yXI1uhqTUev5yGAnOrOhObixVYlLh1sQMQAiVvZl308gMbU48LqdaBhycof4XtO-E3yGIN7rBsVPU_vFRSm3tebYKBARS0zWko8BbJq9c-XPTsuCsX-XSVkILxNzfVr7EaRfuR3TbGpsd_uQK_qlXCFX9sb6_CBGLKYSadwsV0zmPdA5fh87qt7tR4XZp1GhCK6HveIK7fT6NFSHsyYXKRO4rHq1u-ZL8sCBNA',
    alt: 'Neon Portrait'
  },
  {
    id: '2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBdHG20roPOzmbtpU03h5yyfwMvl0IkqVhM8fOYMDMavjILkLqPjxSJrs_vSewBb7uSweWP1EoVrExosxeQ3wLjoBr2RU_dF8qtG16ovjUWKGwwIY_qw2jkh4HhYRqAMdTbqj0txcJECkRu7kRl_2gCgM1gc5qJ-b0mbvJx4eUU5nUgXT8K28OWPpnKeb3Z-cUyQqCUSuytV-bkAVHIa-wB1zBLf8ej3fB20X2NbANZyNq2IHpgtDV2YA-amhyTHQ-G4xEPpqykOl0',
    alt: 'Cyber Helmet'
  },
  {
    id: '3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkBfQ-xtb4yyC5wjEj2ikHXqULC48e_yq1CyDWtIs7WsBNMO8BAefjPPpS64_fPT4C7d7lfki4aI0Uv0WSh5p-xBjnI9LYeRJg0As8z1zLMzgZnEmdk-AXKNqKAK-Lhz-OiXVT8ye7JgDzN3GahsBC7rITpsReT5bvBpXlhu9hPzqSDjoKRcMn1wvm15N_zCr_yVSgF5DxZuMEQknMxSg0_LhKecCOaFR2A41orgjWhZQRytqM9lp85fh5l0_dEzGdPn-klG-MRWn6',
    alt: 'Future Bike'
  },
  {
    id: '4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0ULGFGc6oIooOe4OtdRx4uw74sjyCz-UuTOQ4GMuigHbU-sA7JIn0EyOT05Crt6LxO6GOjaVXqQ6XVeBmCt_YZZ_B5ma_92_3E-QEj37RAZxaAvyv3Gy4H3LPFRfYlvEuxlXSE4hcLhNbHF15_iV1rckBUqbW8doLfdTAp04UI1g9-nbw-DX6ZmKE7Oaqj9gwVd4ME_03U8o-lM4j75qzpoFl-W9309ngYXU-lflgm_Vt7qqAQsTsevsjgiAyqA4gcCmEJ142nfv',
    alt: 'Visor Glasses'
  },
  {
    id: '5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHb69YjYmInk7jf0agMujvrKtIuC49j-F7cchI-lZWqQhIBtNF7gf8vKziu2s0q3m4Pl6bvGOfLgSOlJIem-PQTRn7eME_koKbtrrRZSnjSFhggeY1bZbcIECPO1q_z5yKOmmPBihGe8TQfUYDFjBWcGc00g813qwbU-q8oVPwB836zEOSizy6MbIHyoppJ4uFBlLHF7QpqPoDB8_Zx_iG75m96pyVzqkB3TjaqoQJSsGolAKLEn_6zV4jR-eSbCbJ6D3FZbGkpD5x',
    alt: 'VR User'
  }
];

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col bg-background">
      
      <Header onNavigate={onNavigate} currentPage={AppState.LANDING} />

      {/* Cyberpunk Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a2e25_0%,#020204_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-circuit bg-[length:400px_400px] opacity-20 pointer-events-none [mask-image:radial-gradient(black_40%,transparent_100%)]"></div>
      
      {/* Horizontal lines effect (Scanlines) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none"></div>

      <main className="relative z-10 flex-1 flex flex-col items-center pt-32 pb-12 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-2xl">
            <span>Create Stunn</span>
            <GlitchText text="i" highlightIndices={[0]} />
            <span>ng </span>
            <GlitchText text="I" highlightIndices={[0]} />
            <span>mages</span>
            <br />
            <span>w</span>
            <GlitchText text="i" highlightIndices={[0]} />
            <span>th Just a Prompt</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light tracking-wide">
            Turn your ideas into high-quality visuals in seconds,
            <br className="hidden sm:block" /> no design skills needed.
          </p>

          <div className="pt-4 flex justify-center relative">
             {/* Decorative circuit lines leading to button */}
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>

             <button
              onClick={() => onNavigate(AppState.GENERATOR)}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0a0a0a] border border-primary/50 rounded-full text-white font-medium transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(20,241,149,0.4)] active:scale-95"
            >
              <span className="relative z-10 tracking-wide">Generate image</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1 text-primary" />
              
              {/* Button Inner Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>

        {/* Visual Centerpiece */}
        <div id="showcase" className="w-full mb-24 scroll-mt-32">
          <ScannerGrid images={DEMO_IMAGES} />
        </div>

        {/* Features Grid */}
        <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-6xl px-4 mb-32 scroll-mt-32">
          
          <div className="flex flex-col items-center text-center space-y-4 group">
            <div className="p-3 rounded-xl bg-surface border border-gray-800 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(20,241,149,0.2)] transition-all duration-300">
               <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide">Lightning-Fast<br/>Image Generation</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Experience real-time creativity powered by the latest generative models. Generate complex, high-fidelity scenes in mere seconds, eliminating the wait between your imagination and the screen. Perfect for rapid prototyping and instant inspiration.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 group">
            <div className="p-3 rounded-xl bg-surface border border-gray-800 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(20,241,149,0.2)] transition-all duration-300">
               <Sliders className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide">Multiple Styles &<br/>Customization</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Transcending boundaries between art styles. Whether you need photorealistic product shots, stylized anime characters, or gritty cyberpunk environments, simply describe your vibe. Control lighting, composition, and mood with precision.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 group">
             <div className="p-3 rounded-xl bg-surface border border-gray-800 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(20,241,149,0.2)] transition-all duration-300">
               <Download className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-wide">High-Resolution<br/>Downloads</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Quality that holds up on any screen. Export your masterpieces in stunning high definition, ready for professional use. From social media feeds to large-format print materials, your visuals remain sharp, detailed, and artifact-free.
            </p>
          </div>

        </div>

        {/* Pricing Section */}
        <div id="pricing" className="w-full max-w-5xl px-4 mb-16 scroll-mt-32">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Unlock <span className="text-primary">Full Potential</span>
            </h2>
            <p className="text-gray-400">Choose the plan that fits your creative needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="relative p-8 rounded-2xl bg-surface border border-gray-800 flex flex-col hover:border-gray-700 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-300 font-mono">Starter</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">Perfect for hobbyists and experimentation.</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {[
                  '50 images per month', 
                  'Standard resolution (1K)', 
                  'Public gallery access', 
                  'Standard generation speed'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-gray-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => onNavigate(AppState.GENERATOR)}
                className="w-full py-3 rounded-xl border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Start Creating
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative p-8 rounded-2xl bg-surface border border-primary/50 flex flex-col shadow-[0_0_30px_rgba(20,241,149,0.1)]">
              <div className="absolute -top-4 right-8 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-primary font-mono">Pro</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">$19</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                 <p className="mt-2 text-sm text-gray-500">For professional creators and designers.</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                 {[
                  'Unlimited images', 
                  'High resolution (4K)', 
                  'Commercial usage rights', 
                  'Fast generation mode', 
                  'Priority support'
                 ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-3 rounded-xl bg-primary text-black font-bold hover:bg-primary-dim transition-colors shadow-lg shadow-primary/20">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* Bottom accent light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 blur-[100px] pointer-events-none"></div>
      
      <Footer />
    </div>
  );
};
