import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';
import { Event } from './event';
import { Tag } from './tag';
import { User } from './user';

export class Usercom {
  public readonly subdomain: string;
  public readonly token: string;
  private axios: AxiosInstance;
  public readonly user: User;
  public readonly event: Event;
  public readonly tag: Tag;

  constructor({ subdomain, token }: UsercomClientOptions) {
    this.token = token;

    this.axios = axios.create({
      baseURL: `https://${subdomain}.user.com/api/public`,
      headers: {
        Authorization: `Token ${token}`,
        'content-type': 'application/json',
      },
      timeout: 60000,
    });

    axiosRetry(this.axios, {
      retries: 3,
      retryDelay: (retryCount, error: any) => {
        // NOTE: if we hit rate limit delay the next retry for the time specified in headers
        if (error.response?.headers?.['retry-after']) {
          return error.response.headers['retry-after'];
        }

        return axiosRetry.exponentialDelay(retryCount);
      },
      retryCondition: (e) => {
        if (axiosRetry.isNetworkOrIdempotentRequestError(e)) {
          return true;
        }

        if (e.response && e.response.status === 429) {
          return true;
        }

        return false;
      },
    });

    this.user = new User({ client: this.axios });
    this.event = new Event({ client: this.axios });
    this.tag = new Tag({ client: this.axios });
  }
}

enum LogLevel {
  log = 'log',
  warn = 'warn',
  error = 'error',
}

interface UsercomClientOptions {
  subdomain: string;
  token: string;
  logger?(): { message: string; level: LogLevel };
}
