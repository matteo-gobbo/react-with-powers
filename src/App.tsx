import { usePosts } from "~/hooks/queries";

import "./App.css";

function App() {
  const { data: posts, isLoading, error } = usePosts();

  if (isLoading) return <div>{"Loading..."}</div>;

  if (error) return <div>{"An error has occurred: " + error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts?.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
