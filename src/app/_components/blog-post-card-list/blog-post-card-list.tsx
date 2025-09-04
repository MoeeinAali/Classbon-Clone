import { BlogPostSummary } from "@/lib/types/blog-post-summary.type";
import BlogPostCard from "../blog-post-card/blog-post-card";

type BlogPostCardListProps = {
    posts: BlogPostSummary[]
}

const BlogPostCardList: React.FC<BlogPostCardListProps> = ({
    posts
}: BlogPostCardListProps) => {
    return (
      <div className="flex flex-wrap justify-center xl:justify-start gap-6 my-10">
        {
            posts?.map((post) => (
                <BlogPostCard key={post.slug} {...post} />
            ))
        }
      </div>
    )
}

export default BlogPostCardList;