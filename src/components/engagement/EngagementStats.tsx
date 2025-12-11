import Icon from '@/components/common/Icon';

interface EngagementStatsProps {
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
  showCommentButton?: boolean;
  onLike?: () => void;
}

export default function EngagementStats({
  likes,
  comments,
  shares,
  isLiked = false,
  showCommentButton = false,
  onLike,
}: EngagementStatsProps) {

  return (
    <div className="flex items-center gap-6 text-muted">
      {/* Likes */}
      <button
        onClick={onLike}
        className={`flex items-center gap-2 hover:text-foreground ${
          isLiked ? 'text-red-500' : ''}`}
      >
        <Icon name={isLiked ? 'heart' : 'heart-outline'} size={20} />
        <span className="text-sm">{likes}</span>
      </button>

      {/* Comments */}
      <button className="flex items-center gap-2 hover:text-foreground">
        <Icon name="comment" size={20} />
        <span className="text-sm">{comments}</span>
      </button>

      {/* Shares */}
      <button className="flex items-center gap-2 hover:text-foreground">
        <Icon name="share" size={20} />
        {shares > 0 && <span className="text-sm">{shares}</span>}
      </button>

      {/* Comment Button (optional) */}
      {showCommentButton && (
        <button className="ml-auto text-muted hover:text-foreground text-sm">
          Comment
        </button>
      )}
    </div>
  );
}
