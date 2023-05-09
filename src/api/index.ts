import { axios } from "~lib/axios";

import { FETCH_POSTS_PATH } from "./paths";

export const fetchPosts = async () => {
  const res = await axios.get(FETCH_POSTS_PATH);
  return res.data;
};
