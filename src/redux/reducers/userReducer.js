
// ACTIONS NAME

const USER_INIT = 'USER_INIT';



// ACTIONS

export function userInit (user={}) {
    return {
        type:USER_INIT,
        payload : user
    }
}



// REDUCERS

export default function userReducer (state = {} , action) {
    switch (action.type) {
        case USER_INIT:
            return Object.assign({}, action.payload);   // gelen boş obje ile payload'dan gelen objeyı bırlestırır.
    
        default:
            return state;
    }
}
