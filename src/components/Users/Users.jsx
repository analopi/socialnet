import React from "react";
import s from "./Users.module.css"
import * as axios from "axios";
import userPhoto from "./../Dialogs/avatar/2.jpg"

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger;
                props.setUsers(response.data.items);
            })
        }
    }

    return (<div>
        <a className={s.button} onClick={getUsers}>Вытянуть</a>
        {
            props.users.map(u => <div key={u.id} className={s.flexContainer}>
                <span>
                    <div className={s.avatar}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ddd"/>
                    </div>
                    <div>
                        {u.follow ? <a className={s.button} onClick={() => {
                            props.toggleFolow(u.id)
                        }}>Follow</a> : <a className={s.button} onClick={() => {
                            props.toggleFolow(u.id)
                        }}>Unfollow</a>}
                    </div>
                </span>
                <div className={s.content}>
                    <span className={s.info}>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div className={s.id}>
                            {u.id}
                        </div>
                    </span>
                    </div>
            </div>)
        }</div>)
}
export default Users