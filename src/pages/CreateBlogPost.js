import React, { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../segs-firebase';
import { auth } from '../segs-firebase'
import { useNavigate } from 'react-router-dom'

function CreateBlogPost({isAuth}) {

    const [title, setTitle] = useState('');
    const [text, setPostText] = useState('');

    let navigate = useNavigate();

    const postsCollectionRef = collection(db, 'Blog-Posts');
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title, 
            text, 
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid},
        });
        navigate('/blog');
    }

    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, []);

    return (
        <div className='createPostPage'>
            <div className='cpContainer'>
                <h1>Create Post</h1>
                <div className='inputGp'>
                    <label>Blog Title</label>
                    <input placeholder='Title'
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}/>
                </div>
                <div className='inputGp'>
                    <label>Blog Elements</label>
                    <textarea placeholder='Type here...' 
                            onChange={(event) => {
                                setPostText(event.target.value);
                            }}></textarea>
                </div>
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    )
}

export default CreateBlogPost
