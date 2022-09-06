import React, { useEffect, useState } from 'react'
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import FaceIcon from '@mui/icons-material/Face';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post 
            displayName='Connor Thompson' 
            username='Vice' 
            verified={true}
            text='Yoooo its working'
            avatar={FaceIcon}
            image='https://giphy.com/embed/6qdKZFhT0VBm0' />

        </div>
    )
}

export default Feed