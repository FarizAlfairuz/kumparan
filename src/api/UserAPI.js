import API from './API'

const UserAPI = {
    getUsers() {
        return API.get('/users')
    },

    getSingleUser(id) {
        return API.get('/users/' + id)
    }
}

export default UserAPI