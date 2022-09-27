import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import s from './MyPosts.module.css'
import Post from "./Post/Post";




const MyPosts = (props) => {
    let postItems = props.postData.map((el) => <Post likesCount={el.likesCount} key={el.id} text={el.text} />)


    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.post_block}>
            my post
            <div>
                <div>
                    <textarea onChange={ onPostChange }  value={props.newPostText} />
                </div>
                <div className={s.button_post}>
                    <button onClick={ addPost }>Add  post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    )
}

export default MyPosts