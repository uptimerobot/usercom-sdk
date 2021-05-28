import { AxiosInstance, AxiosResponse } from 'axios';
import { BaseEndpoint } from './baseEndpoint';
import { UserId } from './types';
export declare class Event extends BaseEndpoint {
    constructor({ client }: {
        client: AxiosInstance;
    });
    create({ userId, name, timestamp, data }: UsercomEvent): Promise<AxiosResponse<CreateEventResponse>>;
}
export interface CreateEventResponse {
    id: number;
    created: boolean;
}
export interface UsercomEvent {
    userId: UserId;
    name: string;
    timestamp?: number;
    data?: Record<string, string>;
}
