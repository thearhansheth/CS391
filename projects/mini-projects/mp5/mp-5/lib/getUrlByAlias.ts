import getCollection, { URLS_COLLECTION } from "@/db";
import { UrlEntry } from "@/types/urlEntry";

export default async function getUrlByAlias(alias: string): Promise<UrlEntry | null> {

    const urlsCollection = await getCollection(URLS_COLLECTION);
    const entry = await urlsCollection.findOne({ alias });

    if (!entry){
        return null;
    }

    return {
        id: entry._id.toHexString(),
        alias: entry.alias,
        longUrl: entry.longUrl,
        createdAt: entry.createdAt,
    };
}