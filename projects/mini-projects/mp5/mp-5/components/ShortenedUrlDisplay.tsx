import { UrlEntry } from "@/types/urlEntry";

export default function ShortenedUrlDisplay({ url }: { url: UrlEntry }) {
    return (
        <div className="mt-8 bg-emerald-100 border border-emerald-400 rounded p-3 text-center max-w-lg w-full mx-auto">
            <div className="font-semibold mb-1 text-emerald-900">Shortened URL:</div>
            <a
                className="font-mono text-emerald-700 underline break-all"
                href={url.longUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                {`http://cs-391-mp5.vercel.app/${url.alias}`}
            </a>
        </div>
    );
}
