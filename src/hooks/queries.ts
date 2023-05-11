import { fetchPosts } from "~/api/index";
import { useQueryFactory } from "~/lib/react-query";
import { Post } from "~/models/Post";

import { FETCH_POSTS_KEY } from "./keys";

export const usePosts = () => {
  return useQueryFactory<Post[], Error>(FETCH_POSTS_KEY, () => fetchPosts())();
};
