import Icon from '@/components/common/Icon';

export default function CommentInput() {
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
		console.log('submit comment')
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
			console.log('submit comment')
    }
  };

  return (
    <div className="bg-card rounded-lg p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start gap-3">
          {/* Text Input */}
          <textarea
            onKeyDown={handleKeyDown}
            placeholder="Press Enter to submit"
            className="flex-1 bg-background-secondary text-foreground rounded-lg px-4 py-2 outline-none focus:ring-1 focus:ring-primary resize-none max-h-[200px]"
            rows={3}
          />

          {/* Emoji Button */}
          <button
            type="button"
            className="p-2 hover:bg-background-secondary rounded-lg"
          >
            <Icon name="emoji" size={24} />
          </button>

          {/* Send Button */}
          <button
            type="submit"
            className="p-2 hover:bg-background-secondary rounded-lg"
          >
            <Icon name="send" size={24} />
          </button>
        </div>
      </form>
    </div>
  );
}
