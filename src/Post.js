import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareIcon from '@material-ui/icons/Share';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Post({ profilePic, image, username, timestamp, message}) {
    return (
        <div className="Post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topinfo">
                    <h3>{username}</h3>
                      <p>{new Date(timestamp?.toDate()).toUTCString()}</p>

                </div>



            </div>

            <div className="post__bottom">
                 <p>{message}</p>


            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option" >
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>

                <div className="post__option" >
                    <ChatBubbleOutlineOutlinedIcon/>
                    <p>Comment</p>
                </div>

                <div className="post__option" >
                    <ShareIcon/>
                    <p>Share</p>
                </div>

                <div className="post__option" >
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    )
}

export default Post 