import React from 'react'
import './TweetBox.css'
import { Button } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                <FaceIcon />
                <input placeholder='Tweet Something' type='text'></input>
                </div>
                <input className='tweetBox__imageInput' placeholder='Enter image URL' type='text'></input>
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;