export interface NavItem {
  label: string;
  icon: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: 'Home', icon: '🌐', href: '/' },
  { label: 'Match', icon: '❤️', href: '/match' },
  { label: 'Messages', icon: '💬', href: '/messages' },
  { label: 'Profile', icon: '🔔', href: '/profile' },
  { label: 'Personality Database', icon: '📊', href: '/personality-database' },
  { label: 'Personality Tests', icon: '📝', href: '/personality-tests' },
  { label: 'Resources', icon: '📚', href: '/resources' },
];

export const footerLinks = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Safety Tips', href: '/safety-tips' },
];
