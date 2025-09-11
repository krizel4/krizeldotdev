import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Linkedin, Github } from 'lucide-react';

const FloatingNav = () => {
  const router = useRouter();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'CV', href: '/cv' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/">
            <a className="text-xl font-bold text-white hover:text-gradient-3 transition-colors">
              Krizel Minnema
            </a>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const isActive = router.pathname === item.href || 
                (item.href === '/' && router.pathname === '/');
              
              return (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`text-sm font-medium transition-colors hover:text-gradient-3 ${
                      isActive
                        ? 'text-gradient-3'
                        : 'text-white'
                    }`}
                  >
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function Hero({ globalData }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      <FloatingNav />
      
      {/* Left Section - Background Image with Text Overlay */}
      <div className="flex-1 relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[60vh] lg:min-h-screen">
        {/* Background Image Placeholder - You can replace this with an actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-700/90 to-gray-800/90">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Text Overlay */}
        <div className="relative z-10 flex items-end h-full p-8 lg:p-12 xl:p-16">
          <div className="text-white">
            <p className="text-sm font-medium uppercase tracking-wider mb-4 opacity-80">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-6 leading-tight">
              {globalData.name}.
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl font-light italic opacity-90 max-w-md">
              {globalData.blogTitle}.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Profile Sidebar */}
      <div className="w-full lg:w-96 bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center p-6 lg:p-8 xl:p-12 min-h-[40vh] lg:min-h-screen border-l border-gray-700">
        {/* Profile Picture */}
        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-8 border-4 border-white/20">
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
            <span className="text-4xl lg:text-5xl font-bold text-white">
              {globalData.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-center">
          {globalData.name}.
        </h2>

        {/* Title/Education */}
        <div className="text-white text-center mb-8">
          <p className="text-sm lg:text-base font-medium mb-1">
            {globalData.blogTitle}
          </p>
          <p className="text-sm opacity-80">
            Los Angeles, CA
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-white text-center mb-8 space-y-2">
          <p className="text-sm">
            <a href="mailto:hello@krizel.dev" className="hover:text-gradient-3 transition-colors">
              hello@krizel.dev
            </a>
          </p>
          <p className="text-sm">
            <a href="tel:+18183005908" className="hover:text-gradient-3 transition-colors">
              (818) 300-5908
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-8">
          <a href="https://linkedin.com/in/krizelminnema" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Linkedin className="w-4 h-4 text-white" />
          </a>
          <a href="https://github.com/krizelminnema" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Github className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Download CV Button */}
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          Download CV
        </button>
      </div>
    </div>
  );
}
