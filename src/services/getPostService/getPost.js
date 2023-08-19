import { getPosts } from "../utils";

let getAllPost = async (id) => {
  try {
    const data = await getPosts("/posts");
    return { data };
  } catch (error) {
    return { error };
  }
};
let getDataByid = async (id) => {
  try {
    const data = await getPosts(`/users/${id}`);
    return { data };
  } catch (error) {
    return { error };
  }
};

export { getAllPost, getDataByid };
