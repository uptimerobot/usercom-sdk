import { AxiosInstance, AxiosResponse } from 'axios';
import { BaseEndpoint } from './baseEndpoint';
import { UserId } from './types';

export class User extends BaseEndpoint {
  constructor({ client }: { client: AxiosInstance }) {
    super({ client });
  }

  users({
    next = null,
    params = {},
  }: {
    next?: null | string;
    params?: Record<string, any>;
  }): Promise<AxiosResponse<{ next: null | string; results: UsercomUser[] }>> {
    const endpoint = next || `/users/`;

    return this.client.get(endpoint, { params });
  }

  search({
    next = null,
    params = {}
  }: {
    next: null | string;
    params?: Record<string, any>;
  }): Promise<AxiosResponse<{ next: null | string; results: UsercomUser[] }>> {
    const endpoint = next || `/users/search/`;

    return this.client.get(endpoint, { params });
  }

  create({ data }) {
    return this.client.post(`/users/`, data);
  }

  update({ userId, customAttributes }: UserUpdateOptions): Promise<AxiosResponse> {
    return this.setCustomAttributes({ userId, customAttributes });
  }

  massUpdateCustomAttribute(ids: number[], payload: { attribute: string; value: any }) {
    const data = {
      ids,
      attribute: payload.attribute,
      value: payload.value,
    };

    return this.client.put(`/users/mass_update_custom_attributes/`, data);
  }

  updateOrCreate(payload: Record<string, any>) {
    return this.client.post(`/users/update_or_create/`, payload);
  }

  delete({ userId }: { userId: UserId }): Promise<AxiosResponse> {
    return this.client.delete(`/users-by-id/${userId}/`);
  }

  segment(segmentId: number): Promise<AxiosResponse<{ next: null | string; results: UsercomUser[] }>> {
    return this.client.get(`/segments/${segmentId}/users/`);
  }

  private setCustomAttributes({ userId, customAttributes }): Promise<AxiosResponse> {
    return this.client.post(`/users-by-id/${userId}/set_multiple_attributes/`, customAttributes);
  }
}

export interface UsercomUser {
  id: number;
  user_id: string;
  tags: { name: string }[];
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
