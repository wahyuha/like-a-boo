interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 20, className = '' }: IconProps) {
  const icons: Record<string, string> = {
    search: '🔍',
    bell: '🔔',
		down: '▼',
		menu: '☰',
		coins: '●',
  };

  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      {icons[name] || name}
    </span>
  );
}
