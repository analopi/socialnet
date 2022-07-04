import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postItems = props.postData.map((el) => <Post likesCount={el.likesCount} text = {el.text} />)
    debugger;
    return (
        <div className={s.post_block}>
            my post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div className={s.button_post}>
                    <button>Add  post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    )
}

export default MyPosts