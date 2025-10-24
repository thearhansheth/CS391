import PostPreview from "@/components/PostPreview";

export default function Home() {
    return (
        <div>
            <PostPreview
                post = {{
                    id: "id",
                    title: "demo post",
                    content: "blah blah blah",
                    upvotes: 440,
                    downvotes: 49,
                }}

            />
        </div>
    );
}
