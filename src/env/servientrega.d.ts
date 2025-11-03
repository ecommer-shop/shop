export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SERVIENTREGA_API_KEY: string;
        }
    }
}