import React from "react";
import Users from "./Users"
import { connect } from "react-redux";
import { setUsersAC, toggleFollowAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toggleFolow: (userId) => {
            dispatch(toggleFollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)