import { BlogPostSummary } from "@/lib/types/blog-post-summary.type";
import BlogPostCard from "../blog-post-card/blog-post-card";
import { API_URL } from "@/lib/configs/global";


async function getNewestPosts(count: number): Promise<BlogPostSummary[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/blog/newest/${count}`,
        {
            next: {
                revalidate: 24 * 60 * 60
            }
        }
    )
    const data: BlogPostSummary[] = await response.json();
    return data;
}

const BlogPostCardList: React.FC = async () => {
    const newestPosts = await getNewestPosts(4);

    return (
        <div className="flex flex-wrap justify-center xl:justify-start gap-6 my-10">
            {
                newestPosts?.map((post) => (
                    <BlogPostCard key={post.slug} {...post} />
                ))
            }
        </div>
    )
}

export default BlogPostCardList;