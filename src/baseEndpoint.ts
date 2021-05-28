import { AxiosInstance } from 'axios';

export class BaseEndpoint {
  protected client: AxiosInstance;
  constructor({ client }: { client: AxiosInstance }) {
    this.client = client;
  }
}
