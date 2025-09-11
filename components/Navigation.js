import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'CV', href: '/cv' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/">
            <a className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">
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
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive
                        ? 'text-primary'
                        : 'text-gray-600 dark:text-gray-300'
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
}
