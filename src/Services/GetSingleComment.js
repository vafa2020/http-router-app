import http from "../http";

export default function getSingleComment(id){
    return http.get(`/comments/${id}`)
}