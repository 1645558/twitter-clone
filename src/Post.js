import React from 'react';
import './Post.css';
import FaceIcon from '@mui/icons-material/Face';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <FaceIcon />
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <h3>
                            {displayName}{' '}
                            <span className='post__headerSpecial'>
                                {verified && <VerifiedIcon className='post__badge' />} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <iframe src={image} title='spider' width="480" height="360" frameBorder="0" class="giphy-embed"></iframe><p><a href="https://giphy.com/gifs/6qdKZFhT0VBm0"> </a></p>
                <div className='post__footer'>
                    <ChatBubbleIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    )
}

export default Post