import { DeepPartial, EntityId, ID, User, VendureEntity } from '@vendure/core';
import { Column, Entity, Index, ManyToOne } from 'typeorm';
import type { FeedbackVoteValue } from '../types';
import { FeedbackPost } from './feedback-post.entity';

@Entity()
@Index(['post', 'user'], { unique: true })
export class FeedbackVote extends VendureEntity {
    constructor(input?: DeepPartial<FeedbackVote>) {
        super(input);
    }

    @ManyToOne(() => FeedbackPost, post => post.votes, { onDelete: 'CASCADE' })
    post: FeedbackPost;

    @EntityId()
    postId: ID;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    user: User;

    @EntityId()
    userId: ID;

    @Column('varchar')
    value: FeedbackVoteValue;
}
