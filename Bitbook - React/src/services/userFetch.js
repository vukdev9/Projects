import { http } from './fetchService'


class userFetch {
    posts(onSucces) {
        return http.get("http://crud-api.hypetech.xyz/v1/posts", onSucces)
    }
    users(onSucces) {
        return http.get("http://crud-api.hypetech.xyz/v1/users", onSucces)
    }
    comments(onSucces) {
        return http.get("http://crud-api.hypetech.xyz/v1/comments", onSucces)
    }
}
export const userRequests = new userFetch();