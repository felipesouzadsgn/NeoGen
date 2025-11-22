import React from 'react';
import { Zap, Twitter, Github, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-12 md:py-16 relative overflow-hidden mt-auto">
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                            <Zap className="w-5 h-5 text-black fill-current" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">NeonGen</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Empowering creators with next-generation AI tools. Turn imagination into reality with just a prompt.
                    </p>
                </div>

                {/* Links 1 */}
                <div>
                    <h4 className="font-bold text-white mb-6">Product</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Showcase</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">API Access</a></li>
                    </ul>
                </div>

                 {/* Links 2 */}
                <div>
                    <h4 className="font-bold text-white mb-6">Support</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                 {/* Socials */}
                <div>
                    <h4 className="font-bold text-white mb-6">Connect</h4>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all">
                            <Github className="w-4 h-4" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all">
                            <Instagram className="w-4 h-4" />
                        </a>
                         <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all">
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-500 text-sm">© 2024 NeonGen AI. All rights reserved.</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>Made with future tech</span>
                </div>
            </div>
        </div>
    </footer>
  );
};