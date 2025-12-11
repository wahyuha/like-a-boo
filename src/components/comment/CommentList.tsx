import { useState, useCallback } from 'react';
import type { UserModel } from '@/types/user.types';
import type { CommentModel } from '@/types/comment.types';
import { generateComments } from '@/lib/mockData';

import Comment from '@/components/comment/Comment';
import Tag from '@/components/common/Tag';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

export default function CommentList() {
  const [comments, setComments] = useState<CommentModel[]>(() => generateComments(1, 10));
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = useCallback(() => {
    setIsLoading(true);
    // 
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const newComments = generateComments(nextPage, 10);

      setComments((prevComments) => [...prevComments, ...newComments]);
      setCurrentPage(nextPage);
      setIsLoading(false);
    }, 700)
  }, [currentPage]);

  useInfiniteScroll({
    threshold: 200,
    onLoadMore: handleLoadMore,
    isLoading,
  });

  return (
    <div>
      {/* Comments */}
      <div className="space-y-0">
        {comments.map((comment) => (
          <Comment key={`comment-${comment.id}`} comment={comment} />
        ))}
      </div>

      {/* Loadmore Loader */}
      {isLoading && (
        <div className="flex justify-center py-6">
          <div className="text-gray-500">Loading more comments...</div>
        </div>
      )}
    </div>
  );
}
