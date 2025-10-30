export type BookTypes = {
    id: number;
    title: string;
    image: string;
    authors: { id: number; name: string }[];
    rating: { average: number };
}