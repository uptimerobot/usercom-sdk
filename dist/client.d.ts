import { User } from './user';
export declare class Usercom {
    readonly subdomain: string;
    readonly token: string;
    private axios;
    readonly user: User;
    constructor({ subdomain, token }: UsercomClientOptions);
}
declare enum LogLevel {
    log = "log",
    warn = "warn",
    error = "error"
}
interface UsercomClientOptions {
    subdomain: string;
    token: string;
    logger?(): {
        message: string;
        level: LogLevel;
    };
}
export {};
