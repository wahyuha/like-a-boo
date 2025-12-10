interface UserBadgeProps {
  text: string;
  variant?: 'mbti' | 'zodiac' | 'level';
  className?: string;
}

export default function UserBadge({ text, variant = 'mbti', className = '' }: UserBadgeProps) {
  const variantClasses = {
    mbti: 'bg-primary text-background px-2 py-0.5 rounded text-xs font-semibold',
    zodiac: 'text-muted text-sm',
    level: 'bg-card text-primary px-2 py-0.5 rounded text-xs',
  };

  return <span className={`${variantClasses[variant]} ${className}`}>{text}</span>;
}
