import { AxiosInstance, AxiosResponse } from 'axios';
import { BaseEndpoint } from './baseEndpoint';
import { UserId } from './types';
export declare class User extends BaseEndpoint {
    constructor({ client }: {
        client: AxiosInstance;
    });
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
        userId: UserId;
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
    userId: UserId;
    customAttributes: T;
}
export {};
