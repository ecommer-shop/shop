import { DeepPartial, ID, VendureEntity } from '@vendure/core';
import { User } from '@vendure/core';
import { EntityId } from '@vendure/core';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import type { FeedbackPostStatus } from '../types';
import { FeedbackVote } from './feedback-vote.entity';
import { FeedbackComment } from './feedback-comment.entity';

@Entity()
export class FeedbackPost extends VendureEntity {
    constructor(input?: DeepPartial<FeedbackPost>) {
        super(input);
    }

    @Column()
    title: string;

    @Column('text')
    description: string;

    @Column({ default: 'feature' })
    category: string;

    @Column('varchar', { default: 'under_review' })
    status: FeedbackPostStatus;

    @Column({ default: false })
    prioritized: boolean;

    @Column('text', { nullable: true, default: null })
    adminNote: string | null;

    @ManyToOne(type => User, { nullable: true, onDelete: 'SET NULL' })
    author: User | null;

    @EntityId({ nullable: true })
    authorId: ID | null;

    @Column()
    authorName: string;

    @OneToMany(() => FeedbackVote, vote => vote.post)
    votes: FeedbackVote[];

    @OneToMany(() => FeedbackComment, comment => comment.post)
    comments: FeedbackComment[];
}
