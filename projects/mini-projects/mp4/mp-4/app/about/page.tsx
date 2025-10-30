export default function AboutPage() {
    return (
        <main className="flex flex-col items-center pt-16 min-h-[60vh]">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-3xl font-bold mb-6 text-indigo-800">About Big Book Gallery</h1>
                <p className="text-lg mb-4">
                    This site demonstrates fetching book data from the Big Book API using secure API key handling.
                </p>
                <p className="text-md text-gray-600">
                    MP-4 for CS391, Boston University<br />
                    Built by Arhan Sheth.<br />
                    View real book cards, author names and ratings, and enjoy!
                </p>
            </div>
        </main>
    );
}
