import axiod from "https://deno.land/x/axiod/mod.ts";

class CuttlyClient {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async shorten(url: string): Promise<string> {
       try {
        const res = await axiod.get(`https://cutt.ly/api/api.php?key=${this.apiKey}&short=${url}`);

        return res.data.url.shortLink;
       } catch (error) {
           return error;
       }
    }

    async custom(url: string, alias: string): Promise<string> {
        try {
            const res = await axiod.get(`https://cutt.ly/api/api.php?key=${this.apiKey}&short=${url}&name=${alias}`);

        return res.data.url.shortLink;
        } catch (error) {
            return error;
        }
    }
}

export default CuttlyClient;