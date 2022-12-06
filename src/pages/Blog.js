import React, { useState, useEffect } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { auth, db } from '../segs-firebase'

function Blog({isAuth}) {

  const [postsList, setPostsList] = useState([]);

  const postsCollectionRef = collection(db, 'Blog-Posts');
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ));
    };

    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, 'Blog-Posts', id);
    await deleteDoc(postDoc);
  };

  return (
    <div className='blogPage'>
      {postsList.map((post) => {
        return (
        <div className='post'>
          <div className='postHeader'> 
            <div className='title'> 
              <h1> {post.title} </h1>
            </div>
            <div className='deletePost'> 
              { isAuth && post.author.id === auth. currentUser.uid && <button onClick={() => {deletePost(post.id);}}>&#128465;</button>}
            </div>
          </div>

          <div className='postTextContainer'>
            {post.text}
          </div>
          <h3>@{post.author.name}</h3>
        </div>
        );
      })}
    </div>
  )
}

export default Blog
