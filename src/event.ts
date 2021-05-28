import { AxiosInstance, AxiosResponse } from 'axios';
import { BaseEndpoint } from './baseEndpoint';
import { UserId } from './types';

export class Event extends BaseEndpoint {
  constructor({ client }: { client: AxiosInstance }) {
    super({ client });
  }

  create({ userId, name, timestamp, data }: UsercomEvent): Promise<AxiosResponse<CreateEventResponse>> {
    return this.client.post(`/users-by-id/${userId}/events/`, { name, timestamp, data });
  }
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
