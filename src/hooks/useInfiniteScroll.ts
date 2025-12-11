import { useEffect } from 'react';

interface UseInfiniteScrollOptions {
  threshold?: number;
  onLoadMore: () => void;
  isLoading: boolean;
}

export default function useInfiniteScroll({
  threshold = 200,
  onLoadMore,
  isLoading,
}: UseInfiniteScrollOptions) {
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;

      if (distanceFromBottom <= threshold) {
        onLoadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, onLoadMore, isLoading]);
}
