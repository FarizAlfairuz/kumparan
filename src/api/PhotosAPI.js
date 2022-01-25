import API from './API'

const PhotosAPI = {
    getPhotos() {
        return API.get('/photos')
    },

    getUserAlbums(id) {
        return API.get(`/users/${id}/album`)
    },

    getSingleAlbum(id) {
        return API.get(`/album/${id}/photos`)
    },
}

export default PhotosAPI