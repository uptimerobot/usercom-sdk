import { AxiosInstance, AxiosResponse } from 'axios';
import { BaseEndpoint } from './baseEndpoint';
export declare class Tag extends BaseEndpoint {
    constructor({ client }: {
        client: AxiosInstance;
    });
    tags(): Promise<AxiosResponse<TagsResponse>>;
    getUsersWithTag(tagId: number | string): (next?: null) => Promise<AxiosResponse<{
        next: null | string;
        results: {
            user_id: string;
        }[];
    }>>;
}
export interface TagsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Tag[];
}
export interface Tag {
    name: string;
    id: number;
}
