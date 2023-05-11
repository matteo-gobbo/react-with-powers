import { axios } from "~/lib/axios";
import { Post } from "~/models/Post";

import { FETCH_POSTS_PATH } from "./paths";

/**
 *
 * @returns { Post[] } list of posts
 */
export const fetchPosts = async (): Promise<Post[]> => {
  const res = await axios.get(FETCH_POSTS_PATH);
  return res.data;
};
