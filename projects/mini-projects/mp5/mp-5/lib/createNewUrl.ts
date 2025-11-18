'use server'

import getCollection, {URLS_COLLECTION} from "@/db";
import {UrlEntry} from "@/types/urlEntry";

function isValidAlias(alias: string) {
    return encodeURIComponent(alias) === alias;
}

function isValidUrl(url: string): boolean {
    try {
        const u = new URL(url);

        if (!u.hostname.includes(".")){
            return false;
        }

        return ["http:", "https:"].includes(u.protocol);

    } catch {
        return false;
    }
}

export default async function createNewUrl(alias: string, longUrl: string): Promise<UrlEntry> {
    if (!isValidAlias(alias)) {
        throw new Error("Invalid alias: You may only use valid URL characters");
    }
    if (!isValidUrl(longUrl)) {
        throw new Error("Invalid URL");
    }

    const urlsCollection = await getCollection(URLS_COLLECTION);

    const existing = await urlsCollection.findOne({alias});
    if (existing) {
        throw new Error("Alias already exists");
    }

    const entry = {
        alias: alias,
        longUrl: longUrl,
        createdAt: new Date(),
    };

    const res = await urlsCollection.insertOne(entry);
    if (!res.acknowledged) {
        throw new Error("DB Insert failed");
    }

    return {
        id: res.insertedId.toHexString(),
        alias: entry.alias,
        longUrl: entry.longUrl,
        createdAt: entry.createdAt
    };
}
