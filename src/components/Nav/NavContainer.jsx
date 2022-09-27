import React from "react";
import { connect } from "react-redux";
import Navbar from "./Nav";


let mapStateToProps = (state) => {
    return {
        friendsData: state.sidebar.friendsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer