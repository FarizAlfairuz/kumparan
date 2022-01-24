import API from './API'

const PhotosAPI = {
    getPhotos() {
        return API.get('/photos')
    },

    getSingleAlbum(id) {
        return API.get(`/album/${id}/photos`)
    },

    
}

export default PhotosAPI