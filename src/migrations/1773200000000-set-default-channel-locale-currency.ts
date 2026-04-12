import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetDefaultChannelLocaleCurrency1773200000000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
DO $$
DECLARE
    seller_col text;
    default_lang_col text;
    available_lang_col text;
    default_currency_col text;
    available_currency_col text;
    global_settings_table text;
    global_available_lang_col text;
    where_clause text := 'TRUE';
BEGIN
    SELECT column_name INTO seller_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('sellerId', 'seller_id')
    ORDER BY CASE WHEN column_name = 'sellerId' THEN 0 ELSE 1 END
    LIMIT 1;

    IF seller_col IS NOT NULL THEN
        where_clause := format('%I IS NULL', seller_col);
    END IF;

    SELECT column_name INTO default_lang_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('defaultLanguageCode', 'default_language_code')
    ORDER BY CASE WHEN column_name = 'defaultLanguageCode' THEN 0 ELSE 1 END
    LIMIT 1;

    IF default_lang_col IS NOT NULL THEN
        EXECUTE format('UPDATE "channel" SET %I = ''es'' WHERE %s', default_lang_col, where_clause);
    END IF;

    SELECT column_name INTO available_lang_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('availableLanguageCodes', 'available_language_codes')
    ORDER BY CASE WHEN column_name = 'availableLanguageCodes' THEN 0 ELSE 1 END
    LIMIT 1;

    IF available_lang_col IS NOT NULL THEN
        EXECUTE format($sql$
            UPDATE "channel"
            SET %I = CASE
                WHEN %I IS NULL OR %I = '' THEN 'es'
                WHEN (',' || %I || ',') LIKE '%%,es,%%' THEN %I
                ELSE %I || ',es'
            END
            WHERE %s
        $sql$, available_lang_col, available_lang_col, available_lang_col, available_lang_col, available_lang_col, available_lang_col, where_clause);
    END IF;

    SELECT column_name INTO default_currency_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('defaultCurrencyCode', 'default_currency_code')
    ORDER BY CASE WHEN column_name = 'defaultCurrencyCode' THEN 0 ELSE 1 END
    LIMIT 1;

    IF default_currency_col IS NOT NULL THEN
        EXECUTE format('UPDATE "channel" SET %I = ''COP'' WHERE %s', default_currency_col, where_clause);
    END IF;

    SELECT column_name INTO available_currency_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('availableCurrencyCodes', 'available_currency_codes')
    ORDER BY CASE WHEN column_name = 'availableCurrencyCodes' THEN 0 ELSE 1 END
    LIMIT 1;

    IF available_currency_col IS NOT NULL THEN
        EXECUTE format($sql$
            UPDATE "channel"
            SET %I = CASE
                WHEN %I IS NULL OR %I = '' THEN 'COP'
                WHEN (',' || %I || ',') LIKE '%%,COP,%%' THEN %I
                ELSE %I || ',COP'
            END
            WHERE %s
        $sql$, available_currency_col, available_currency_col, available_currency_col, available_currency_col, available_currency_col, available_currency_col, where_clause);
    END IF;

    SELECT table_name INTO global_settings_table
    FROM information_schema.tables
    WHERE table_schema = current_schema()
      AND table_name IN ('global_settings', 'globalSettings')
    ORDER BY CASE WHEN table_name = 'global_settings' THEN 0 ELSE 1 END
    LIMIT 1;

    IF global_settings_table IS NOT NULL THEN
        SELECT column_name INTO global_available_lang_col
        FROM information_schema.columns
        WHERE table_schema = current_schema()
          AND table_name = global_settings_table
          AND column_name IN ('availableLanguages', 'available_languages')
        ORDER BY CASE WHEN column_name = 'availableLanguages' THEN 0 ELSE 1 END
        LIMIT 1;

        IF global_available_lang_col IS NOT NULL THEN
            EXECUTE format($sql$
                UPDATE %I
                SET %I = CASE
                    WHEN %I IS NULL OR %I = '' THEN 'es'
                    WHEN (',' || %I || ',') LIKE '%%,es,%%' THEN %I
                    ELSE %I || ',es'
                END
            $sql$, global_settings_table, global_available_lang_col, global_available_lang_col, global_available_lang_col, global_available_lang_col, global_available_lang_col, global_available_lang_col);
        END IF;
    END IF;
END $$;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
DO $$
DECLARE
    seller_col text;
    default_lang_col text;
    available_lang_col text;
    default_currency_col text;
    available_currency_col text;
    global_settings_table text;
    global_available_lang_col text;
    where_clause text := 'TRUE';
BEGIN
    SELECT column_name INTO seller_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('sellerId', 'seller_id')
    ORDER BY CASE WHEN column_name = 'sellerId' THEN 0 ELSE 1 END
    LIMIT 1;

    IF seller_col IS NOT NULL THEN
        where_clause := format('%I IS NULL', seller_col);
    END IF;

    SELECT column_name INTO default_lang_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('defaultLanguageCode', 'default_language_code')
    ORDER BY CASE WHEN column_name = 'defaultLanguageCode' THEN 0 ELSE 1 END
    LIMIT 1;

    IF default_lang_col IS NOT NULL THEN
        EXECUTE format('UPDATE "channel" SET %I = ''en'' WHERE %s', default_lang_col, where_clause);
    END IF;

    SELECT column_name INTO available_lang_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('availableLanguageCodes', 'available_language_codes')
    ORDER BY CASE WHEN column_name = 'availableLanguageCodes' THEN 0 ELSE 1 END
    LIMIT 1;

    IF available_lang_col IS NOT NULL THEN
        EXECUTE format($sql$
            UPDATE "channel"
            SET %I = CASE
                WHEN %I IS NULL OR %I = '' THEN 'en'
                WHEN (',' || %I || ',') LIKE '%%,en,%%' THEN %I
                ELSE %I || ',en'
            END
            WHERE %s
        $sql$, available_lang_col, available_lang_col, available_lang_col, available_lang_col, available_lang_col, available_lang_col, where_clause);
    END IF;

    SELECT column_name INTO default_currency_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('defaultCurrencyCode', 'default_currency_code')
    ORDER BY CASE WHEN column_name = 'defaultCurrencyCode' THEN 0 ELSE 1 END
    LIMIT 1;

    IF default_currency_col IS NOT NULL THEN
        EXECUTE format('UPDATE "channel" SET %I = ''USD'' WHERE %s', default_currency_col, where_clause);
    END IF;

    SELECT column_name INTO available_currency_col
    FROM information_schema.columns
    WHERE table_schema = current_schema()
      AND table_name = 'channel'
      AND column_name IN ('availableCurrencyCodes', 'available_currency_codes')
    ORDER BY CASE WHEN column_name = 'availableCurrencyCodes' THEN 0 ELSE 1 END
    LIMIT 1;

    IF available_currency_col IS NOT NULL THEN
        EXECUTE format($sql$
            UPDATE "channel"
            SET %I = CASE
                WHEN %I IS NULL OR %I = '' THEN 'USD'
                WHEN (',' || %I || ',') LIKE '%%,USD,%%' THEN %I
                ELSE %I || ',USD'
            END
            WHERE %s
        $sql$, available_currency_col, available_currency_col, available_currency_col, available_currency_col, available_currency_col, available_currency_col, where_clause);
    END IF;

    SELECT table_name INTO global_settings_table
    FROM information_schema.tables
    WHERE table_schema = current_schema()
      AND table_name IN ('global_settings', 'globalSettings')
    ORDER BY CASE WHEN table_name = 'global_settings' THEN 0 ELSE 1 END
    LIMIT 1;

    IF global_settings_table IS NOT NULL THEN
        SELECT column_name INTO global_available_lang_col
        FROM information_schema.columns
        WHERE table_schema = current_schema()
          AND table_name = global_settings_table
          AND column_name IN ('availableLanguages', 'available_languages')
        ORDER BY CASE WHEN column_name = 'availableLanguages' THEN 0 ELSE 1 END
        LIMIT 1;

        IF global_available_lang_col IS NOT NULL THEN
            EXECUTE format($sql$
                UPDATE %I
                SET %I = CASE
                    WHEN %I IS NULL OR %I = '' THEN 'en'
                    WHEN (',' || %I || ',') LIKE '%%,en,%%' THEN %I
                    ELSE %I || ',en'
                END
            $sql$, global_settings_table, global_available_lang_col, global_available_lang_col, global_available_lang_col, global_available_lang_col, global_available_lang_col, global_available_lang_col);
        END IF;
    END IF;
END $$;
        `);
    }
}
