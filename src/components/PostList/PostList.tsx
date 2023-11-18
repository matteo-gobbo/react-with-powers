import { usePosts } from "~/hooks/queries";

import { PostTitle } from "./PostTitle";

export default function PostList() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>{"Loading..."}</div>;

  if (error) return <div>{"An error has occurred: " + error.message}</div>;
  return (
    <div>
      <h1>Posts</h1>

      {posts?.map((post, index) => (
        <PostTitle key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}
