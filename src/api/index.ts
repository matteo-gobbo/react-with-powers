import { Post } from "~/components/PostList/Post.interface";
import { axios } from "~/lib/axios";

import { FETCH_POSTS_PATH } from "./paths";

/**
 *
 * @returns { Post[] } list of posts
 */
export const fetchPosts = async (): Promise<Post[]> => {
  const res = await axios.get(FETCH_POSTS_PATH);
  return res.data;
};
