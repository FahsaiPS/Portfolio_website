import React from "react";
import { useState } from "react";
import "./post.css";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

import userIcon from "./../../assets/userImg.png"
import homeimg from "./../../assets/homeimg.png"

const Post = () => {
    const [like, setLike] = useState(false);

    const handleLikeClick = () => {
        setLike(!like); 
    };

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__userimg ">
                <img src={userIcon} className="userimg"/>
                <p>_ssaiii</p>
                </div>
                <IoIosMore className="postIcon"/>
            </div>
            <div  className="post__img">
                <img src={homeimg} className="postimg"/>
            </div>
            <div className="post__icons">
                <div className="post__icons-left">
                <div onClick={handleLikeClick}>
                {like ? <FaHeart className="postIcon"/> : <FiHeart className="postIcon"/>}
                </div>
                <IoChatbubbleOutline className="postIcon"/>
                <FiSend className="postIcon"/>
                </div>
                <FaRegBookmark className="postIcon"/>
            </div>
            <div className="post__text">
                <p>Like me!</p>
            </div>
        </div>
    )
}

export default Post;