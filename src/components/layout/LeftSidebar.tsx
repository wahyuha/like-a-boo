import { useRouter } from 'next/router';
import { mainNavItems, footerLinks } from '@/constants/navigation';

export default function LeftSidebar() {
	const router = useRouter();
	const activePath = mainNavItems.findIndex(item => item.href === router.pathname);
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-background border-r border-background-secondary overflow-y-auto hidden lg:block">
      <div className="flex flex-col h-full">
        {/* Nav Items */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            {mainNavItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                    index === activePath
                      ? 'bg-background-secondary text-primary'
                      : 'text-muted hover:bg-background-secondary hover:text-foreground'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="p-6 border-t border-background-secondary">
          {/* TODO:App Store Links */}

          {/* Language Options */}
          <button className="px-4 py-2 bg-background-secondary rounded-lg text-muted hover:text-foreground mb-4">
            English
          </button>

          {/* Footer */}
          <p className="text-xs text-primary mb-3">We stand for love 💚</p>

          <div className="flex flex-wrap gap-3 text-xs text-muted mb-3">
            {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-foreground">
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted">© 2025 Boo Enterprises, Inc.</p>
        </div>
      </div>
    </aside>
  );
}
