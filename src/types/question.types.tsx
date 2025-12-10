export interface QuestionModel {
  id: string;
  type: string;
  title: string;
  date: string;
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
}