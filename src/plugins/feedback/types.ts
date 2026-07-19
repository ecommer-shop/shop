export type FeedbackPostStatus = 'under_review' | 'planned' | 'in_progress' | 'done' | 'declined';

export type FeedbackVoteValue = 'ok' | 'not_ok';

export type FeedbackCategory = 'feature' | 'improvement' | 'bug' | 'other';

export interface FeedbackPostDto {
    id: string | number;
    createdAt: Date;
    title: string;
    description: string;
    category: string;
    status: FeedbackPostStatus;
    prioritized: boolean;
    adminNote: string | null;
    authorName: string;
    okVotes: number;
    notOkVotes: number;
    myVote: FeedbackVoteValue | null;
    commentCount: number;
    mine: boolean;
}

export interface FeedbackCommentDto {
    id: string | number;
    createdAt: Date;
    authorName: string;
    text: string;
    mine: boolean;
}
