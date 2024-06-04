"use server";
import axios from "axios";

export default ({ method, url, body }) => {
  const doRequest = async () => {
    const response = await axios[method](`http://localhost:8181${url}`, body);
    return response.data;
  };
};
