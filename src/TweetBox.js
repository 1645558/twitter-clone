import React from 'react'
import './TweetBox.css'
import { Button } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetbox__input'>
                <FaceIcon />
                <input placeholder='Tweet Something' type='text'></input>
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;