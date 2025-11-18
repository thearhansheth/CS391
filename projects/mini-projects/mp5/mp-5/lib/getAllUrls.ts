import getCollection, { URLS_COLLECTION } from "@/db";
import { UrlEntry } from "@/types/urlEntry";

export default async function getAllUrls(): Promise<UrlEntry[]> {
    const urlsCollection = await getCollection(URLS_COLLECTION);
    const data = await urlsCollection.find().toArray();

    const urls: UrlEntry[] = data.map((entry) => ({
        id: entry._id.toHexString(),
        alias: entry.alias,
        longUrl: entry.longUrl,
        createdAt: entry.createdAt,
    }));

    return urls.reverse();
}
