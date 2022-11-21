const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USER_COUNT = 'SER-TOTAL-USER-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING ';
let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false
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
            return {...state, usersData:  action.usersData }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching }
        default:
            return state;
    }

}

export const  toggleFollow= (userId) => ({
    type: TOGGLE_FOLLOW, userId
})
export const  setUsers= (usersData) => ({
    type: SET_USERS, usersData
})
export const  setCurentPage= (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
})
export const  setTotalUsersCount= (totalCount) => ({
    type: SET_TOTAL_USER_COUNT, totalCount
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})


export default usersReducer;