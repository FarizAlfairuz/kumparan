import API from './API'

const PhotosAPI = {
    getPhotos() {
        return API.get('/photos')
    },

    getUserAlbums(id) {
        return API.get(`/users/${id}/albums`)
    },

    getSingleAlbum(id) {
        return API.get(`/albums/${id}/photos`)
    },
}

export default PhotosAPI