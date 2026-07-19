import { DeepPartial, EntityId, ID, User, VendureEntity } from '@vendure/core';
import { Column, Entity, ManyToOne } from 'typeorm';
import { FeedbackPost } from './feedback-post.entity';

@Entity()
export class FeedbackComment extends VendureEntity {
    constructor(input?: DeepPartial<FeedbackComment>) {
        super(input);
    }

    @ManyToOne(() => FeedbackPost, post => post.comments, { onDelete: 'CASCADE' })
    post: FeedbackPost;

    @EntityId()
    postId: ID;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    user: User | null;

    @EntityId({ nullable: true })
    userId: ID | null;

    @Column()
    authorName: string;

    @Column('text')
    text: string;
}
