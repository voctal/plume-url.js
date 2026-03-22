import { PlumeURLREST, PlumeURLRESTOptions } from "./rest";
import { SearchURLOptions, SearchURLResults, URLData, CreateURLOptions, EditURLOptions } from "./routes";
import { queryfy } from "./utils";

export interface PlumeURLOptions extends PlumeURLRESTOptions {}

/**
 * The client to interact with Plume URL.
 */
export default class PlumeURL {
    public readonly rest: PlumeURLREST;

    public constructor(options?: PlumeURLOptions) {
        this.rest = new PlumeURLREST(options);
    }

    /**
     * Create a new shortened URL.
     */
    public async createURL(options: CreateURLOptions): Promise<URLData> {
        return await this.rest.post("/create", options);
    }

    /**
     * Search URLs.
     */
    public async search({ customId, limit, page, expired }: SearchURLOptions): Promise<SearchURLResults> {
        const params = queryfy({ customId, limit, page, expired });
        return await this.rest.get(`/search${params}`);
    }

    /**
     * Get an URL.
     */
    public async getURL(id: string): Promise<URLData> {
        return await this.rest.get(`/urls/${id}`);
    }

    /**
     * Edit an URL.
     */
    public async editURL(id: string, options: EditURLOptions) {
        await this.rest.request("PATCH", `/urls/${id}`, options);
    }

    /**
     * Delete an URL.
     */
    public async deleteURL(id: string) {
        await this.rest.request("DELETE", `/urls/${id}`);
    }
}
