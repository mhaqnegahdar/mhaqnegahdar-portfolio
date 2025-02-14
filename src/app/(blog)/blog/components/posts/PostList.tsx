// Components
import Pagination from "@/app/(blog)/blog/components/posts/Pagination";
import PostCard from "@/app/(blog)/blog/components/posts/card/PostCard";

export default function PostList() {
  return (
    <section className="mx-auto mb-20 mt-14 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <PostCard />
      <Pagination />
    </section>
  );
}
