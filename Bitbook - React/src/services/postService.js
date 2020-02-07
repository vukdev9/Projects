import { http } from '../services/fetchService'
import { postsEndpoint } from '../shared/constants'
import { Post } from '../models/Post'

class PostService {
    

    deleteSinglePost  = (id,data,token) => {
        const url = `https://crud-api.hypetech.xyz/v1/posts/${id}`
        return http.delete(url,data,token)
    } 

    createPost = (data, token) => {
        const url = "https://crud-api.hypetech.xyz/v1/posts"
        return http.post(url, data, token)
    }

    updatePost = (id, data, token) => {
        const url = `https://crud-api.hypetech.xyz/v1/posts/${id}`
        return http.put(url, data, token)
    }


    fetchSinglePost = (id, token) => {
        const requestUrl = `https://crud-api.hypetech.xyz/v1/posts/${id}`
        return http.get(requestUrl)
    }

    getPosts() {

        return http.get(postsEndpoint)
            .then(posts => {
                return posts.map((post) => {
                    return new Post(post)
                })
            })
    }


}
export const postService = new PostService()