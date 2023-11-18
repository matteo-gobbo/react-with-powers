import { fetchPosts } from "~/api/index";
import { Post } from "~/components/PostList/Post.interface";
import { useQueryFactory } from "~/lib/react-query";

import { FETCH_POSTS_KEY } from "./keys";

export const usePosts = () => {
  return useQueryFactory<Post[], Error>(FETCH_POSTS_KEY, () => fetchPosts())();
};
