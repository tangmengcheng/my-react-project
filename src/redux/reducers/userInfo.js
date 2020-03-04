import { GET_USER_INFO } from 'actions/userInfo'
const initState = {
    userInfo: {}
}

export default function reducer(state = initState, action) {
    console.log(action.type);
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state
    }
}