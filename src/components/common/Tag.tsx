interface TagProps {
  text: string;
  variant?: 'primary' | 'default' | 'dark';
  className?: string;
  onClick?: () => void;
}

export default function Tag({ text, variant = 'primary', className = '', onClick }: TagProps) {
  const variantClasses = {
    primary: 'bg-primary text-background',
    default: 'bg-card text-foreground',
    dark: 'bg-background-secondary text-foreground',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm ${variantClasses[variant]} ${
        onClick ? 'cursor-pointer hover:opacity-80' : ''
      } ${className}`}
      onClick={onClick}
    >
      {text}
    </span>
  );
}
