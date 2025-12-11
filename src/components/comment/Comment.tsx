import type { CommentModel } from '@/types/comment.types';
import Avatar from '@/components/common/Avatar';
import UserBadge from '@/components/common/UserBadge';
import EngagementStats from '@/components/engagement/EngagementStats';
import Icon from '@/components/common/Icon';

import { useState } from 'react';

interface CommentProps {
  comment: CommentModel;
}

export default function Comment({ comment }: CommentProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={`bg-card rounded-lg p-4 mb-4`}>
      {/* User Info Header */}
      <div className="flex items-start gap-3 mb-3">
        <Avatar src={comment.user.avatar} alt={comment.user.name} size="md" />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-semibold text-foreground">
              {comment.user.name}
            </span>
            {comment.user.verified && <span className="text-primary">●</span>}
            <span className="text-muted text-sm">{comment.timestamp}</span>
            <button className="ml-auto text-muted hover:text-foreground">⋯</button>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <UserBadge text={comment.user.mbti} variant="mbti" />
            <UserBadge text={comment.user.zodiac} variant="zodiac" />
            <UserBadge text={comment.user.level} variant="level" />
          </div>
        </div>
      </div>

      {/* Awards */}
      {comment.awards > 0 && (
        <div className="flex items-center gap-2 mb-3 text-sm">
          <Icon name="bookmark" size={16} />
          <span className="text-muted">{comment.awards} Award</span>
        </div>
      )}

      {/* Comment Text */}
      <p className="text-foreground mb-4 leading-relaxed">{comment.text}</p>

      {/* Engagement */}
      <div className="flex items-center justify-between">
        <EngagementStats
          likes={comment.stats.likes}
          comments={comment.stats.comments}
          shares={comment.stats.shares}
          isLiked={isLiked}
          onLike={handleToggleLike}
          showCommentButton={true}
        />

        {/* Bookmark */}
        <div className="flex items-center gap-4">
          <button className="text-muted hover:text-foreground">
            <Icon name="bookmark-outline" size={18} />
          </button>
        </div>
      </div>

    </div>
  );
}
