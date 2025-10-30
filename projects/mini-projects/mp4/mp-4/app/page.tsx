import getData from "@/lib/getData";
import {BookTypes} from "@/types/BookTypes";

export default async function Home() {
    const data  = await getData();
    let books: BookTypes[] = [];
    try {
        books = Array.isArray(data.books) ? data.books.flat() : [];
    } catch (e) {
        console.error("API error fetching books:", e);
        books = [];
    }
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-white shadow p-6 flex flex-col items-center">
                <h1 className="text-3xl font-bold text-indigo-900 mb-3">Big Book Gallery</h1>
                <nav>
                    <a href="/about"
                        className="text-indigo-500 text-md font-semibold underline hover:text-indigo-900">
                        About this Gallery
                    </a>
                </nav>
            </header>
            <main className="flex-1 max-w-4xl mx-auto w-full py-10">
                {books.map((book: BookTypes) => {
                    let ratingColor = "text-gray-700";
                    if (book.rating?.average >= 0.85) ratingColor = "text-green-600";
                    else if (book.rating?.average >= 0.6) ratingColor = "text-yellow-600";
                    else if (book.rating?.average) ratingColor = "text-red-600";

                    return (
                        <div
                            key={book.id}
                            className="flex flex-row items-center bg-white border border-gray-200 shadow-md rounded-lg mb-10 py-6 px-6 transition-shadow hover:shadow-xl focus-within:ring-2 focus-within:ring-indigo-500"
                        >
                            <img
                                src={book.image}
                                alt={`Cover of ${book.title}`}
                                className="w-32 h-auto rounded mr-8 shadow"
                            />
                            <div className="flex flex-col justify-center w-full">
                                <h2 className="font-extrabold text-2xl mb-2 text-indigo-900">{book.title}</h2>
                                {book.authors?.length > 0 && (
                                    <p className="mb-1">
                                        <span className="font-semibold">Author:</span>{" "}
                                        {book.authors.map((a) => a.name).join(", ")}
                                    </p>
                                )}
                                <p className={`mb-1 font-semibold ${ratingColor}`}>
                                    Rating:{" "}
                                    {book.rating?.average
                                        ? Number(book.rating.average).toFixed(4)
                                        : "N/A"}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </main>
            <footer className="bg-white mt-auto p-4 text-center text-gray-400 text-sm">
                All right reserved by Arhan Sheth &copy;
            </footer>
        </div>
    );
}