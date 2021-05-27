import { AxiosInstance, AxiosResponse } from 'axios';
export declare class User {
    private client;
    constructor({ client }: UserOptions);
    users({ next, }: {
        next?: null | string;
    }): Promise<AxiosResponse<{
        next: null | string;
        results: UsercomUser[];
    }>>;
    create({ data }: {
        data: any;
    }): Promise<AxiosResponse<any>>;
    update({ userId, customAttributes }: UserUpdateOptions): Promise<AxiosResponse>;
    delete({ userId }: {
        userId: string | number;
    }): Promise<AxiosResponse>;
    private setCustomAttributes;
}
export interface UsercomUser {
    user_id: string;
    tags: {
        name: string;
    }[];
}
interface UserUpdateOptions<T = any> {
    userId: string | number;
    customAttributes: T;
}
interface UserOptions {
    client: AxiosInstance;
}
export {};
