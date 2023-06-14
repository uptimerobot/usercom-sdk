import { AxiosInstance, AxiosResponse } from 'axios';
import { BaseEndpoint } from './baseEndpoint';
import { UserId } from './types';
export declare class User extends BaseEndpoint {
    constructor({ client }: {
        client: AxiosInstance;
    });
    users({ next, params, }: {
        next?: null | string;
        params?: Record<string, any>;
    }): Promise<AxiosResponse<{
        next: null | string;
        results: UsercomUser[];
    }>>;
    search({ next, params }: {
        next: null | string;
        params?: Record<string, any>;
    }): Promise<AxiosResponse<{
        next: null | string;
        results: UsercomUser[];
    }>>;
    create({ data }: {
        data: any;
    }): Promise<AxiosResponse<any, any>>;
    update({ userId, customAttributes }: UserUpdateOptions): Promise<AxiosResponse>;
    massUpdateCustomAttribute(ids: number[], payload: {
        attribute: string;
        value: any;
    }): Promise<AxiosResponse<any, any>>;
    updateOrCreate(payload: Record<string, any>): Promise<AxiosResponse<any, any>>;
    delete({ userId }: {
        userId: UserId;
    }): Promise<AxiosResponse>;
    segment(segmentId: number): Promise<AxiosResponse<{
        next: null | string;
        results: UsercomUser[];
    }>>;
    private setCustomAttributes;
}
export interface UsercomUser {
    id: number;
    user_id: string;
    tags: {
        name: string;
    }[];
    attributes: {
        id: number;
        name: string;
        name_std: string;
        value: unknown;
        description: string;
        value_type: number;
    }[];
}
interface UserUpdateOptions<T = any> {
    userId: UserId;
    customAttributes: T;
}
export {};
