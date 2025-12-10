import { universes } from '@/lib/mockData';
import Tag from '@/components/common/Tag';

export default function UniversesPanel() {
  return (
    <div className="bg-card rounded-lg p-6 mb-6">
      {/* Header */}
      <h3 className="text-xl font-bold text-foreground mb-4">Universes</h3>

      {/* Featured Tags */}
			{universes.slice(0, 3).map((universe, index) => (
				<div className="flex flex-wrap gap-2 mb-4">
        <Tag text={universe.tag} variant="primary" />
        <span className="text-sm text-muted self-center">{universe.souls}</span>
      </div>
			))}
      
      {/* All Universe Tags */}
      <div className="space-y-2">
        {universes.slice(3).map((universe, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 hover:bg-background-secondary rounded px-2 cursor-pointer"
          >
            <span className="text-sm text-foreground">{universe.tag}</span>
            <span className="text-xs text-muted">{universe.souls} souls</span>
          </div>
        ))}
      </div>
    </div>
  );
}
