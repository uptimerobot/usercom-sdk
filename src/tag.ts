import { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { BaseEndpoint } from './baseEndpoint';

export class Tag extends BaseEndpoint {
  constructor({ client }: { client: AxiosInstance }) {
    super({ client });
  }

  tags(): Promise<AxiosResponse<TagsResponse>> {
    return this.client.get(`/tags/`);
  }

  getUsersWithTag(tagId: number | string) {
    return (next = null): Promise<AxiosResponse<{ next: null | string; results: { user_id: string }[] }>> => {
      const endpoint = next || `/tags/${tagId}/users/`;

      return this.client.get(endpoint);
    };
  }
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
