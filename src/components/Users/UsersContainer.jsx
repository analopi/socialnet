import React from "react";
import {connect} from "react-redux";
import {
    setCurentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleIsFetching
} from "../../redux/users-reducer";
import * as axios from "axios";
import User from "./User";
import Preloader from "../common/Preloader/Preloader";


class UsersAPIcomponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(100);
            this.props.toggleIsFetching(false)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false)
        });
    }


    render() {


        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <User totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  toggleFollow={this.props.toggleFollow}
            /></>)
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFolow: (userId) => {
//             dispatch(toggleFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurentPage: (pageNumber) => {
//             dispatch(setCurentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersAPIcomponent)