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
                            Connor Thompson {' '}
                            <span className='post__headerSpecial'>
                                <VerifiedIcon className='post__badge' />
                            </span>
                        </h3>
                    </div>
                    <div className='post__headerDescription'>
                        <p>
                            lorem epsum
                        </p>
                    </div>
                </div>
                <iframe src="https://giphy.com/embed/6qdKZFhT0VBm0" title='spider' width="480" height="360" frameBorder="0" class="giphy-embed"></iframe><p><a href="https://giphy.com/gifs/6qdKZFhT0VBm0"> </a></p>
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