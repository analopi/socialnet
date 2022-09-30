const TOGGLE_FOLLOW = 'TOGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    usersData: [
        {id: 1, id_img: "1.png", follow: true, name: "Vitalik", location: {country: "Russia", city: "Ekaterinburg"}, status: "I wanna learn Chinese."},
        {id: 2, id_img: "2.jpg", follow: false, name: "Roma", location: {country: "Ukraine", city: "Kiev"}, status: "Hi i am new users in this social-net."},
        {id: 3, id_img: "3.jpeg", follow: false, name: "Sveta", location: {country: "Belarus", city: "Brest"}, status: "Yesterday I planted potatoes."},
        {id: 4, id_img: "4.jpg", follow: true, name: "Kazah", location: {country: "Russia", city: "Tagil"}, status: "I and my Friend Leha fly in Turkey tomoorow  Епт."}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId){
                        return {...u, follow: !u.follow};
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, action.users] }
        default:
            return state;
    }

}

export const  toggleFollowAC= (userId) => ({
    type: TOGGLE_FOLLOW, userId
})
export const  setUsersAC= (usersData) => ({
    type: SET_USERS, usersData
})


export default usersReducer;