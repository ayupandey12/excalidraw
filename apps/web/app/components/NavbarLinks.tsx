'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="relative z-[100]">
      <div className="flex justify-between items-center px-8 md:px-16 py-6 text-white">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <MessageCircle size={14} className="text-[#9333ea]" />
          </div>
          Chat<span className="font-light opacity-80">Flow</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-[13px] font-medium tracking-wide">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center gap-6">
              <Link href={link.href} className="hover:text-pink-200 transition-colors">{link.name}</Link>
              {index !== navLinks.length - 1 && <span className="opacity-30">|</span>}
            </div>
          ))}
          <Link href="/signin" className="ml-4 px-7 py-2 bg-white text-purple-700 font-bold rounded-full hover:bg-pink-50 transition-all shadow-md">
            Login
          </Link>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button 
          className="md:hidden z-[110] p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Styled to match your image */}
      <div className={`fixed inset-0 bg-[#7e22ce]/95 backdrop-blur-2xl z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white hover:text-pink-300 transition-colors tracking-tight"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-12 h-1 bg-white/20 my-4 rounded-full" />
          
          <Link 
            href="/signin" 
            onClick={() => setIsOpen(false)}
            className="px-12 py-4 bg-white text-purple-700 font-black rounded-2xl text-xl shadow-2xl active:scale-95 transition-transform"
          >
            Login Now
          </Link>
        </div>

        {/* Decorative Dots in Mobile Menu */}
        <div className="absolute bottom-10 grid grid-cols-5 gap-2 opacity-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
          ))}
        </div>
      </div>
    </nav>
  );
}
