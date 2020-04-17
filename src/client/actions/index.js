import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS'

const fetchUsers = () => async dispatch => {
    const res = await axios.get('http://react-ssr-api.herokuapp.com/users')

    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}

// const fetchUsers = () => {
//     return dispatch => {
//         axios.get('http://react-ssr-api.herokuapp.com/users')
//             .then(res => res)
//             .then(res => {
//                 dispatch({
//                     type: FETCH_USERS,
//                     payload: res
//                 })
//             })
//     }
// }

export {
    fetchUsers
}