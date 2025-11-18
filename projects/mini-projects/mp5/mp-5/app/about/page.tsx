import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="max-w-lg mx-auto mt-24 px-4 py-8 bg-white rounded-xl shadow">
            <h1 className="text-2xl font-bold mb-2 text-black">About This Project</h1>
            <p className="mb-4 text-gray-700">
                This is a CS391 assignment project for creating a simple and secure URL shortener using Next.js, MongoDB, and Tailwind CSS.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
                <li>Users can create custom aliases for any valid long URL.</li>
                <li>Visiting <span className="font-mono">/alias</span> instantly redirects to the original link.</li>
                <li>Database validation ensures unique aliases and valid URLs.</li>
            </ul>
            <div className="mt-6 text-sm text-gray-400">Created by Arhan Sheth</div>
            <div className="mt-8 flex justify-center">
                <Link
                    href="/"
                    className="px-6 py-2 rounded bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
                >
                    ← Home
                </Link>
            </div>
        </main>
    );
}
