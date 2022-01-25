import API from './API'

const PostsAPI = {
    getPosts() {
        return API.get('/posts')
    },

    getSinglePost(id) {
        return API.get('/posts/' + id)
    },

    getComments(id) {
        return API.get(`/posts/${id}/comments`)
    }
}

export default PostsAPI