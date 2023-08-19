import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

const axiosInstance = axios.create({ baseURL });

let getPosts = async (url, id) => {
  try {
    const data = await axiosInstance.get(url, id);
    return { data };
  } catch (error) {
    return { error };
  }
};


export { getPosts };
