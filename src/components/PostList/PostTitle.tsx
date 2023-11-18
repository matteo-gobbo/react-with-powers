import { Post } from "./Post.interface";

export function PostTitle({ post, index }: { post: Post; index: number }) {
  return (
    <div>
      {index}) {post.title}
    </div>
  );
}
