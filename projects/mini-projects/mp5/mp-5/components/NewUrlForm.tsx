'use client'

import createNewUrl from "@/lib/createNewUrl";
import { UrlEntry } from "@/types/urlEntry";
import { useState } from "react";

export default function NewUrlForm({ append }: { append: (url: UrlEntry) => void }) {
    const [alias, setAlias] = useState("");
    const [longUrl, setLongUrl] = useState("");
    const [error, setError] = useState("");

    return (
        <form
            className="w-full flex flex-col gap-4"
            onSubmit={async (event) => {
                event.preventDefault();
                setError("");
                try {
                    const newUrl = await createNewUrl(alias, longUrl);
                    append(newUrl);
                } catch (err: any) {
                    setError(err.message);
                }
            }}
        >
            <label className="text-black font-semibold text-lg">Shorten a URL</label>
            <span className="text-black mb-2">Enter a long URL to create a shorter, shareable link</span>

            <input
                className="border border-gray-300 text-black rounded px-3 py-2 placeholder:text-gray-200"
                placeholder="https://example.com/very/long/url"
                value={longUrl}
                onChange={e => setLongUrl(e.target.value)}
            />

            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">https://cs-391-mp5.vercel.app/</span>
                <input
                    className="flex-1 border border-gray-300 text-black rounded px-3 py-2 placeholder:text-gray-200"
                    placeholder="your-custom-alias"
                    value={alias}
                    onChange={e => setAlias(e.target.value)}
                />
            </div>

            {error && <div className="text-red-600 font-medium">{error}</div>}

            <button
                className="w-full mt-4 font-semibold rounded bg-emerald-500 text-white py-3 hover:bg-emerald-600 transition"
                type="submit"
                disabled={!alias || !longUrl}
            >
                Shorten
            </button>
        </form>
    );
}
