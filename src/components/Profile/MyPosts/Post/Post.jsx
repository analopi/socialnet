import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return   <div className={s.item}>
                <img src="https://loginportal.funnyjunk.com/comments/+_e7e00c8f8a605ad40671872cc682ce62.jpg" alt="" />
                {props.text} {props.likesCount}
            </div>
}

export default Post