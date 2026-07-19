import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFeedbackTables1781870000000 implements MigrationInterface {
    name = 'AddFeedbackTables1781870000000';
    transaction = false;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "feedback_post" (
                "id" SERIAL PRIMARY KEY,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "title" character varying NOT NULL,
                "description" text NOT NULL,
                "category" character varying NOT NULL DEFAULT 'feature',
                "status" character varying NOT NULL DEFAULT 'under_review',
                "prioritized" boolean NOT NULL DEFAULT false,
                "adminNote" text,
                "authorName" character varying NOT NULL,
                "authorId" integer,
                CONSTRAINT "fk_feedback_post_author" FOREIGN KEY ("authorId")
                    REFERENCES "user" ("id") ON DELETE SET NULL
            )`,
        );
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "feedback_vote" (
                "id" SERIAL PRIMARY KEY,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "value" character varying NOT NULL,
                "postId" integer NOT NULL,
                "userId" integer NOT NULL,
                CONSTRAINT "fk_feedback_vote_post" FOREIGN KEY ("postId")
                    REFERENCES "feedback_post" ("id") ON DELETE CASCADE,
                CONSTRAINT "fk_feedback_vote_user" FOREIGN KEY ("userId")
                    REFERENCES "user" ("id") ON DELETE CASCADE
            )`,
        );
        await queryRunner.query(
            `CREATE UNIQUE INDEX IF NOT EXISTS "idx_feedback_vote_post_user"
             ON "feedback_vote" ("postId", "userId")`,
        );
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "feedback_comment" (
                "id" SERIAL PRIMARY KEY,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "authorName" character varying NOT NULL,
                "text" text NOT NULL,
                "postId" integer NOT NULL,
                "userId" integer,
                CONSTRAINT "fk_feedback_comment_post" FOREIGN KEY ("postId")
                    REFERENCES "feedback_post" ("id") ON DELETE CASCADE,
                CONSTRAINT "fk_feedback_comment_user" FOREIGN KEY ("userId")
                    REFERENCES "user" ("id") ON DELETE SET NULL
            )`,
        );
        await queryRunner.query(
            `CREATE INDEX IF NOT EXISTS "idx_feedback_comment_post"
             ON "feedback_comment" ("postId")`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "feedback_comment"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "feedback_vote"`);
        await queryRunner.query(`DROP TABLE IF EXISTS "feedback_post"`);
    }
}
