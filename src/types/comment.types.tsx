import type { UserModel } from './user.types'

export interface CommentModel {
  id: number;
  user: UserModel;
  awards: number;
  text: string;
  timestamp: string;
  stats: {
		likes: number;
		comments: number;
		shares: number;
	}
  replies?: CommentModel[];
}