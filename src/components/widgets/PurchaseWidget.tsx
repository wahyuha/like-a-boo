import Button from '@/components/common/Button';

export default function PurchaseWidget() {
  return (
    <div className="bg-card rounded-lg p-6 mb-6">
      {/* Illustration */}
      <div className="flex justify-center gap-4 mb-4">
        <div className="text-6xl">🥰</div>
        <div className="text-6xl">😘</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground text-center mb-2">
        Your Best Friends
      </h3>

      {/* Description */}
      <p className="text-sm text-muted text-center mb-4 px-2">
			Genuine souls who value authenticity and enjoy deep conversations sprinkled with humor.
      </p>

      {/* Progress Indicator */}
      <div className="flex justify-center mb-4">
        <div className="h-1 w-16 bg-primary rounded-full"></div>
      </div>

      {/* Slider Indicator */}
      <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted">
        <div className="w-6 h-6 rounded-full bg-background-secondary"></div>
        <span>just purchased</span>
      </div>

      {/* Activate Button */}
      <Button variant="primary" className="w-full font-semibold">
        ACTIVATE BOO INFINITY
      </Button>
    </div>
  );
}
