import React from "react";
import s from "./Users.module.css"


const Users = (props) =>{





    return(<div>
        {
            props.users.map(u => <div key = {u.id}>
                <span>
                    <div className={s.avatar}>
                        <img src={require("./../Dialogs/avatar/" + u.id_img)} />
                    </div>
                    <div>
                        { u.follow ? <button onClick={() => {props.toggleFolow(u.id)}}>Follow</button> : <button onClick={() => {props.toggleFolow(u.id)}}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.city}
                        </div>
                        <div>
                            {u.location.country}
                        </div>
                    </span>
                </span>
            </div>)
        }
    </div>)
}
export default Users