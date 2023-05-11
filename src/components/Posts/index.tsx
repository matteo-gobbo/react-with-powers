import { usePosts } from "~/hooks/queries";

export const Posts = () => {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>{"Loading..."}</div>;

  if (error) return <div>{"An error has occurred: " + error.message}</div>;
  return (
    <div>
      <h1>Posts</h1>

      {posts?.map((post, index) => (
        <div key={post.id}>{`${index}. ${post.title}`}</div>
      ))}
    </div>
  );
};
