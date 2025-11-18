'use client';

import { useState } from "react";
import NewUrlForm from "@/components/NewUrlForm";
import ShortenedUrlDisplay from "@/components/ShortenedUrlDisplay";
import Header from "@/components/Header";
import { UrlEntry } from "@/types/urlEntry";

export default function Home() {
    const [newUrl, setNewUrl] = useState<UrlEntry | null>(null);

    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center">
            <Header />
            <div className="mt-16 mb-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-black">URL Shortener</h1>
                <div className="text-lg text-gray-700 font-light">
                    Shorten your long URLs into compact, shareable links
                </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl px-8 py-8 w-full max-w-lg flex flex-col items-center">
                <NewUrlForm append={setNewUrl} />
            </div>
            {newUrl && <ShortenedUrlDisplay url={newUrl} />}
        </div>
    );
}
