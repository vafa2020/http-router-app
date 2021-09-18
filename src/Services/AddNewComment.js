import instance from "../axiosInstance";

export default function addComment(value) {
  const token = "hi ali";
  const Headers = {
    headers: {
      Authorization: `Bearar ${token}`,
    },
  };
  return instance.post("/comments", value, Headers);
}
