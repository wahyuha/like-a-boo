import { QuestionModel } from "@/types/question.types";
import { UniverseModel } from "@/types/universe.types";
import { CommentModel } from "@/types/comment.types";
import { UserModel } from "@/types/user.types";

export const universes: UniverseModel[] = [
  { tag: "#music", souls: "1.3M" },
  { tag: "#movies", souls: "18K" },
  { tag: "#realmadrid", souls: "14K" },
  { tag: "#sports", souls: "11K" },
  { tag: "#memes", souls: "9.8K" },
  { tag: "#art", souls: "3.3K" },
  { tag: "#learning", souls: "2.5K" },
  { tag: "#history", souls: "1.7K" },
  { tag: "#culture", souls: "1.6K" },
  { tag: "#videos", souls: "1.2K" },
  { tag: "#languages", souls: "898" },
  { tag: "#fashion", souls: "742" },
];


export const questionData: QuestionModel = {
  id: "dwsQOX",
  type: "Question of the Day",
  title: "What would you choose: a relationship full of adventures or a peaceful one?",
  date: "10/11/2025",
  stats: {
    likes: 595,
    comments: 4076,
    shares: 12,
  },
};

const mockUsers: UserModel[] = [
  {
    name: "John Doe",
    avatar: "https://ui-avatars.com/api/?name=John%20Doe&background=4EDCD8&color=0a0a0a",
    mbti: "INFJ",
    zodiac: "Aquarius",
    level: "2of1",
    verified: true,
  },
  {
    name: "Dani",
    avatar: "https://ui-avatars.com/api/?name=Dani&background=4EDCD8&color=0a0a0a",
    mbti: "ENFP",
    zodiac: "Leo",
    level: "3of2",
    verified: true,
  },
  {
    name: "Jordan",
    avatar: "https://ui-avatars.com/api/?name=Jordan&background=4EDCD8&color=0a0a0a",
    mbti: "INTJ",
    zodiac: "Scorpio",
    level: "1of1",
    verified: false,
  },
  {
    name: "Fran",
    avatar: "https://ui-avatars.com/api/?name=Fran&background=4EDCD8&color=0a0a0a",
    mbti: "ESFJ",
    zodiac: "Pisces",
    level: "4of3",
    verified: true,
  },
  {
    name: "Tania Mai",
    avatar: "https://ui-avatars.com/api/?name=Tania%20Mai&background=4EDCD8&color=0a0a0a",
    mbti: "ESFJ",
    zodiac: "Pisces",
    level: "4of3",
    verified: true,
  }
];


export const commentsData: Omit<CommentModel, "id">[] = [
  {
    user: mockUsers[0],
    awards: 1,
    text: "A healthy relationship requires both adventure and peace. 💕",
    timestamp: "1mo",
    stats: { likes: 292, comments: 19, shares: 2 },
    replies: [],
  },
  {
    user: mockUsers[1],
    awards: 0,
    text: "I'd choose adventures! Life is too short to play it safe all the time.",
    timestamp: "2mo",
    stats: { likes: 156, comments: 8, shares: 1 },
    replies: [],
  },
  {
    user: mockUsers[2],
    awards: 2,
    text: "Peaceful relationships are underrated. Quality over quantity always.",
    timestamp: "1mo",
    stats: { likes: 203, comments: 12, shares: 0 },
    replies: [],
  },
  {
    user: mockUsers[3],
    awards: 0,
    text: "Why not both? Balance is key in any relationship",
    timestamp: "3w",
    stats: { likes: 421, comments: 31, shares: 5 },
    replies: [],
  },
  {
    user: mockUsers[4],
    awards: 1,
    text: "Adventures create memories, but peace creates home. I want a home.",
    timestamp: "2w",
    stats: { likes: 337, comments: 24, shares: 3 },
    replies: [],
  },
];

const generateReplies = (parentId: number, count: number): CommentModel[] => {
  const replies: CommentModel[] = [];
  const replyTexts = [
    "I totally agree with you!",
    "That's an interesting perspective.",
    "Have you considered the other side though?",
    "This is exactly what I needed to hear today.",
    "Can you elaborate more on this?",
    "Great point! I never thought of it that way.",
    "I respectfully disagree, but I see where you're coming from.",
  ];

  for (let i = 0; i < count; i++) {
    const user = mockUsers[i % mockUsers.length];
    replies.push({
      id: parentId * 1000 + i + 1,
      user,
      awards: 0,
      text: replyTexts[i % replyTexts.length],
      timestamp: i < 2 ? '1d' : i < 4 ? '2d' : '3d',
      stats: { likes: Math.floor(Math.random() * 50) + 5, comments: 0, shares: 0 },
    });
  }
  return replies;
};

export const generateComments = (page: number = 1, limit: number = 10): CommentModel[] => {
  const comments: CommentModel[] = [];
  const startIndex = (page - 1) * limit;

  for (let i = 0; i < limit; i++) {
    const baseIndex = (startIndex + i) % commentsData.length;
    const baseComment = commentsData[baseIndex];
    const commentId = startIndex + i + 1;

    const replyCount = baseComment.stats.comments;
    const replies = replyCount > 0 ? generateReplies(commentId, replyCount) : [];

    comments.push({
      id: commentId,
      ...baseComment,
      replies,
    });
  }

  return comments;
};
