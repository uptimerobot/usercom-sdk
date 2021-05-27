import { AxiosInstance, AxiosResponse } from 'axios';
import axiosRetry from 'axios-retry';

export class User {
  private client: AxiosInstance;
  constructor({ client }: UserOptions) {
    this.client = client;
  }

  users({
    next = null,
  }: {
    next?: null | string;
  }): Promise<AxiosResponse<{ next: null | string; results: UsercomUser[] }>> {
    const endpoint = next || `/users/`;

    return this.client.get(endpoint);
  }

  create({ data }) {
    return this.client.post(`/users/`, data);
  }

  update({ userId, customAttributes }: UserUpdateOptions): Promise<AxiosResponse> {
    return this.setCustomAttributes({ userId, customAttributes });
  }

  delete({ userId }: { userId: string | number }): Promise<AxiosResponse> {
    return this.client.delete(`/users-by-id/${userId}/`);
  }

  private setCustomAttributes({ userId, customAttributes }): Promise<AxiosResponse> {
    return this.client.post(`/users-by-id/${userId}/set_multiple_attributes/`, customAttributes);
  }
}

export interface UsercomUser {
  user_id: string;
  tags: { name: string }[];
}

interface UserUpdateOptions<T = any> {
  userId: string | number;
  customAttributes: T;
}

interface UserOptions {
  client: AxiosInstance;
}
