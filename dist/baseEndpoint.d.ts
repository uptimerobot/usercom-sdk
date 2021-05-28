import { AxiosInstance } from 'axios';
export declare class BaseEndpoint {
    protected client: AxiosInstance;
    constructor({ client }: {
        client: AxiosInstance;
    });
}
