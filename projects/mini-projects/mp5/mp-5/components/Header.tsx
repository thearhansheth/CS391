import Link from "next/link";

export default function Header() {
    return (
        <nav className="w-full text-xl font-bold flex items-center justify-between px-6 py-4 bg-white shadow-sm">
            <span className="text-black">CS391 URL Shortener</span>
            <div className="flex gap-6 font-normal text-base">
                <Link href="/" className="text-black">Home</Link>
                <Link href="/about" className="text-black">About This Project</Link>
            </div>
        </nav>
    );
}
