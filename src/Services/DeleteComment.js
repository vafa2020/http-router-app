import http from "../http";

export default function deleteComment(id) {
  return http.delete(`/comments/${id}`);
}
