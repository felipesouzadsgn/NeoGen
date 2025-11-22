
import React, { useState, useMemo } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AppState } from '../types';
import { Download, Heart, Filter, ChevronDown, Search } from 'lucide-react';

interface GalleryProps {
  onNavigate: (page: AppState) => void;
}

// Extended mock data
const GALLERY_ITEMS = [
  { id: '1', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnWpvawsUVZll6CjqIB5Bn6c537nWxZ_m_XzfsD_yXI1uhqTUev5yGAnOrOhObixVYlLh1sQMQAiVvZl308gMbU48LqdaBhycof4XtO-E3yGIN7rBsVPU_vFRSm3tebYKBARS0zWko8BbJq9c-XPTsuCsX-XSVkILxNzfVr7EaRfuR3TbGpsd_uQK_qlXCFX9sb6_CBGLKYSadwsV0zmPdA5fh87qt7tR4XZp1GhCK6HveIK7fT6NFSHsyYXKRO4rHq1u-ZL8sCBNA', category: 'Portraits', prompt: 'Neon lit woman holding a glowing orb', likes: 245, date: '2024-03-10' },
  { id: '2', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkBfQ-xtb4yyC5wjEj2ikHXqULC48e_yq1CyDWtIs7WsBNMO8BAefjPPpS64_fPT4C7d7lfki4aI0Uv0WSh5p-xBjnI9LYeRJg0As8z1zLMzgZnEmdk-AXKNqKAK-Lhz-OiXVT8ye7JgDzN3GahsBC7rITpsReT5bvBpXlhu9hPzqSDjoKRcMn1wvm15N_zCr_yVSgF5DxZuMEQknMxSg0_LhKecCOaFR2A41orgjWhZQRytqM9lp85fh5l0_dEzGdPn-klG-MRWn6', category: 'Vehicles', prompt: 'Futuristic white motorcycle in studio', likes: 189, date: '2024-03-12' },
  { id: '3', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0ULGFGc6oIooOe4OtdRx4uw74sjyCz-UuTOQ4GMuigHbU-sA7JIn0EyOT05Crt6LxO6GOjaVXqQ6XVeBmCt_YZZ_B5ma_92_3E-QEj37RAZxaAvyv3Gy4H3LPFRfYlvEuxlXSE4hcLhNbHF15_iV1rckBUqbW8doLfdTAp04UI1g9-nbw-DX6ZmKE7Oaqj9gwVd4ME_03U8o-lM4j75qzpoFl-W9309ngYXU-lflgm_Vt7qqAQsTsevsjgiAyqA4gcCmEJ142nfv', category: 'Fashion', prompt: 'Model wearing reflective rainbow visor', likes: 302, date: '2024-03-08' },
  { id: '4', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHb69YjYmInk7jf0agMujvrKtIuC49j-F7cchI-lZWqQhIBtNF7gf8vKziu2s0q3m4Pl6bvGOfLgSOlJIem-PQTRn7eME_koKbtrrRZSnjSFhggeY1bZbcIECPO1q_z5yKOmmPBihGe8TQfUYDFjBWcGc00g813qwbU-q8oVPwB836zEOSizy6MbIHyoppJ4uFBlLHF7QpqPoDB8_Zx_iG75m96pyVzqkB3TjaqoQJSsGolAKLEn_6zV4jR-eSbCbJ6D3FZbGkpD5x', category: 'Cyberpunk', prompt: 'VR headset user in digital realm', likes: 156, date: '2024-03-11' },
  { id: '5', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBdHG20roPOzmbtpU03h5yyfwMvl0IkqVhM8fOYMDMavjILkLqPjxSJrs_vSewBb7uSweWP1EoVrExosxeQ3wLjoBr2RU_dF8qtG16ovjUWKGwwIY_qw2jkh4HhYRqAMdTbqj0txcJECkRu7kRl_2gCgM1gc5qJ-b0mbvJx4eUU5nUgXT8K28OWPpnKeb3Z-cUyQqCUSuytV-bkAVHIa-wB1zBLf8ej3fB20X2NbANZyNq2IHpgtDV2YA-amhyTHQ-G4xEPpqykOl0', category: 'Portraits', prompt: 'Daft punk style helmet close up', likes: 420, date: '2024-03-09' },
  { id: '6', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnWpvawsUVZll6CjqIB5Bn6c537nWxZ_m_XzfsD_yXI1uhqTUev5yGAnOrOhObixVYlLh1sQMQAiVvZl308gMbU48LqdaBhycof4XtO-E3yGIN7rBsVPU_vFRSm3tebYKBARS0zWko8BbJq9c-XPTsuCsX-XSVkILxNzfVr7EaRfuR3TbGpsd_uQK_qlXCFX9sb6_CBGLKYSadwsV0zmPdA5fh87qt7tR4XZp1GhCK6HveIK7fT6NFSHsyYXKRO4rHq1u-ZL8sCBNA', category: 'Cyberpunk', prompt: 'Green light mysterious figure', likes: 112, date: '2024-03-01' },
  { id: '7', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkBfQ-xtb4yyC5wjEj2ikHXqULC48e_yq1CyDWtIs7WsBNMO8BAefjPPpS64_fPT4C7d7lfki4aI0Uv0WSh5p-xBjnI9LYeRJg0As8z1zLMzgZnEmdk-AXKNqKAK-Lhz-OiXVT8ye7JgDzN3GahsBC7rITpsReT5bvBpXlhu9hPzqSDjoKRcMn1wvm15N_zCr_yVSgF5DxZuMEQknMxSg0_LhKecCOaFR2A41orgjWhZQRytqM9lp85fh5l0_dEzGdPn-klG-MRWn6', category: 'Vehicles', prompt: 'Side view of white superbike', likes: 89, date: '2024-03-05' },
  { id: '8', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx0ULGFGc6oIooOe4OtdRx4uw74sjyCz-UuTOQ4GMuigHbU-sA7JIn0EyOT05Crt6LxO6GOjaVXqQ6XVeBmCt_YZZ_B5ma_92_3E-QEj37RAZxaAvyv3Gy4H3LPFRfYlvEuxlXSE4hcLhNbHF15_iV1rckBUqbW8doLfdTAp04UI1g9-nbw-DX6ZmKE7Oaqj9gwVd4ME_03U8o-lM4j75qzpoFl-W9309ngYXU-lflgm_Vt7qqAQsTsevsjgiAyqA4gcCmEJ142nfv', category: 'Fashion', prompt: 'Oversized sunglasses cyber fashion', likes: 334, date: '2024-03-14' },
  { id: '9', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHb69YjYmInk7jf0agMujvrKtIuC49j-F7cchI-lZWqQhIBtNF7gf8vKziu2s0q3m4Pl6bvGOfLgSOlJIem-PQTRn7eME_koKbtrrRZSnjSFhggeY1bZbcIECPO1q_z5yKOmmPBihGe8TQfUYDFjBWcGc00g813qwbU-q8oVPwB836zEOSizy6MbIHyoppJ4uFBlLHF7QpqPoDB8_Zx_iG75m96pyVzqkB3TjaqoQJSsGolAKLEn_6zV4jR-eSbCbJ6D3FZbGkpD5x', category: 'Abstract', prompt: 'Digital consciousness interface', likes: 99, date: '2024-02-28' },
  { id: '10', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBdHG20roPOzmbtpU03h5yyfwMvl0IkqVhM8fOYMDMavjILkLqPjxSJrs_vSewBb7uSweWP1EoVrExosxeQ3wLjoBr2RU_dF8qtG16ovjUWKGwwIY_qw2jkh4HhYRqAMdTbqj0txcJECkRu7kRl_2gCgM1gc5qJ-b0mbvJx4eUU5nUgXT8K28OWPpnKeb3Z-cUyQqCUSuytV-bkAVHIa-wB1zBLf8ej3fB20X2NbANZyNq2IHpgtDV2YA-amhyTHQ-G4xEPpqykOl0', category: 'Portraits', prompt: 'Robot head dark background', likes: 210, date: '2024-03-02' },
  { id: '11', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnWpvawsUVZll6CjqIB5Bn6c537nWxZ_m_XzfsD_yXI1uhqTUev5yGAnOrOhObixVYlLh1sQMQAiVvZl308gMbU48LqdaBhycof4XtO-E3yGIN7rBsVPU_vFRSm3tebYKBARS0zWko8BbJq9c-XPTsuCsX-XSVkILxNzfVr7EaRfuR3TbGpsd_uQK_qlXCFX9sb6_CBGLKYSadwsV0zmPdA5fh87qt7tR4XZp1GhCK6HveIK7fT6NFSHsyYXKRO4rHq1u-ZL8sCBNA', category: 'Abstract', prompt: 'Emerald glow concept art', likes: 145, date: '2024-03-13' },
  { id: '12', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkBfQ-xtb4yyC5wjEj2ikHXqULC48e_yq1CyDWtIs7WsBNMO8BAefjPPpS64_fPT4C7d7lfki4aI0Uv0WSh5p-xBjnI9LYeRJg0As8z1zLMzgZnEmdk-AXKNqKAK-Lhz-OiXVT8ye7JgDzN3GahsBC7rITpsReT5bvBpXlhu9hPzqSDjoKRcMn1wvm15N_zCr_yVSgF5DxZuMEQknMxSg0_LhKecCOaFR2A41orgjWhZQRytqM9lp85fh5l0_dEzGdPn-klG-MRWn6', category: 'Vehicles', prompt: 'Speed bike prototype', likes: 278, date: '2024-03-07' },
];

const CATEGORIES = ['All', 'Portraits', 'Cyberpunk', 'Vehicles', 'Fashion', 'Abstract'];

export const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredImages = useMemo(() => {
    let filtered = GALLERY_ITEMS;

    // Category Filter
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    // Search Filter
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.prompt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sorting
    return [...filtered].sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return b.likes - a.likes;
      }
    });
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div className="relative min-h-screen bg-background flex flex-col">
      <Header onNavigate={onNavigate} currentPage={AppState.GALLERY} />
      
      <main className="flex-1 pt-32 px-4 sm:px-6 lg:px-8 pb-20 max-w-[1600px] mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Community <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Explore thousands of generated images from our community. 
            Get inspired and download your favorites.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? 'bg-primary text-black border-primary'
                    : 'bg-surface text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search prompts..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-surface border border-gray-800 rounded-xl text-sm text-white focus:border-primary outline-none transition-colors placeholder:text-gray-600"
              />
            </div>
            
            <div className="relative group">
              <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-gray-800 rounded-xl text-sm text-white hover:border-gray-600 transition-colors">
                <Filter className="w-4 h-4" />
                <span className="capitalize">{sortBy}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>
              
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-32 bg-surface border border-gray-800 rounded-xl overflow-hidden shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                <button 
                  onClick={() => setSortBy('newest')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${sortBy === 'newest' ? 'text-primary' : 'text-gray-300'}`}
                >
                  Newest
                </button>
                <button 
                  onClick={() => setSortBy('popular')}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${sortBy === 'popular' ? 'text-primary' : 'text-gray-300'}`}
                >
                  Popular
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden bg-surface border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,241,149,0.15)]"
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.prompt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                
                <p className="text-white text-sm font-medium line-clamp-2 mb-4">
                  "{image.prompt}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm">
                      <Heart className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-gray-400">{image.likes}</span>
                  </div>

                  <button 
                    className="px-4 py-2 bg-primary text-black text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-primary-dim transition-colors"
                    onClick={() => window.open(image.src, '_blank')}
                  >
                    <Download className="w-3 h-3" />
                    Save
                  </button>
                </div>
              </div>

              {/* Category Tag (Visible always) */}
              <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono text-primary border border-primary/20 opacity-100 group-hover:opacity-0 transition-opacity">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <Search className="w-12 h-12 mb-4 opacity-20" />
            <p className="text-lg">No images found matching your criteria.</p>
          </div>
        )}

      </main>
      
      <Footer />
    </div>
  );
};
