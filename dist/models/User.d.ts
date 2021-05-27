export interface CustomAttribute<TNameStdKey = string, TValue = any> {
    value: TValue;
    name: string;
    name_std: TNameStdKey;
    id: number;
}
export interface UsercomUser<T = Array<CustomAttribute>> {
    updated_at: string;
    status: string;
    gravatar_url: string;
    name: string;
    last_seen: string;
    id: number;
    first_seen: string;
    attributes: T;
    created_at: string;
    email: string;
}
