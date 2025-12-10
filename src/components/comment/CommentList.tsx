import { useEffect } from 'react';
import type { UserModel } from '@/types/user.types';
import { generateComments } from '@/lib/mockData';

import Comment from '@/components/comment/Comment';
import Tag from '@/components/common/Tag';

export default function CommentList() {
	const comments = generateComments();
  return (
    <div>
      {/* Comments */}
      <div className="space-y-0">
        {comments.map((comment) => (
          <Comment key={`comment-${comment.id}`} comment={comment} />
        ))}
      </div>
    </div>
  );
}
