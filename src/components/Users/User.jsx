import React from "react";
import s from "./Users.module.css";
import userPhoto from "../Dialogs/avatar/2.jpg";

const User = (props) =>{

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++){
    pages.push(i);
}
    return (<div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={() => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.flexContainer}>
                <span>
                    <div className={s.avatar}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ddd"/>
                    </div>
                    <div>
                        {u.follow ? <a className={s.button} onClick={() => {
                            props.toggleFollow(u.id)
                        }}>Follow</a> : <a className={s.button} onClick={() => {
                            props.toggleFollow(u.id)
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
export default User;