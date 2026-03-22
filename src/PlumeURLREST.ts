import PlumeURLError from "./PlumeURLError";

export interface PlumeURLRESTOptions {
    /**
     * The API key to use.
     */
    apiKey?: string;
    userAgent?: string;
}

export default class PlumeURLREST {
    public static readonly baseURL: string = "https://url.voctal.dev/api";
    public static readonly defaultUserAgent: string = "plume-url.js";

    public constructor(public readonly options: PlumeURLRESTOptions = {}) {}

    public async request(method: string, path: string, body?: object): Promise<Response> {
        if (!path.startsWith("/")) {
            throw new Error(`Invalid path: ${path}`);
        }

        const headers = new Headers({
            "User-Agent": `${PlumeURLREST.defaultUserAgent} ${this.options.userAgent || ""}`.trim(),
        });
        if (this.options.apiKey) {
            headers.set("Authorization", this.options.apiKey);
        }
        if (body) {
            headers.append("Content-Type", "application/json");
        }

        const url = `${PlumeURLREST.baseURL}${path}`;

        let res;
        try {
            res = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
        } catch (err) {
            throw new PlumeURLError(`Failed to fetch ${url}`, { cause: err });
        }

        if (!res.ok) {
            throw new PlumeURLError(`Invalid response ${url}: ${res.statusText}`, undefined, res);
        }

        return res;
    }

    public async get<T = unknown>(path: string): Promise<T> {
        const res = await this.request("GET", path);
        return (await res.json()) as T;
    }

    public async post<T = unknown>(path: string, body?: object): Promise<T> {
        const res = await this.request("POST", path, body);
        return (await res.json()) as T;
    }
}
