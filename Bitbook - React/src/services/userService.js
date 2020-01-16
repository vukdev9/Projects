import { http } from './fetchService'

class UserService {
    getSingleAuthor(id) {
        return http.get('http://crud-api.hypetech.xyz/v1/users/' + id)
            .then(result => {
                if(result.firstName) {
                    return result.firstName
                }
                return result.name.first
            })
    }
}
export const userService = new UserService()