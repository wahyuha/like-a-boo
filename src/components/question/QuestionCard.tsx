import { QuestionModel } from '@/types/question.types';
import Tag from '@/components/common/Tag';
import EngagementStats from '@/components/engagement/EngagementStats';

interface QuestionCardProps {
  question: QuestionModel;
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 mb-6">
      {/* Question Type Badge */}
      <div className="mb-3">
        <Tag text={question.type} variant="primary" />
      </div>

      {/* Question Title and Date */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold text-foreground flex-1">
            {question.title}
          </h2>
          <span className="text-sm text-muted whitespace-nowrap">{question.date}</span>
        </div>
      </div>

      {/* Engagement Stats */}
      <EngagementStats
        likes={question.stats.likes}
        comments={question.stats.comments}
        shares={question.stats.shares}
        isLiked={false}
        showCommentButton
      />
    </div>
  );
}
