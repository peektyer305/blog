import React, { useEffect, useState } from 'react';
import "./Createpost.css";
import { addDoc,collection} from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
const Createpost = ({isAuth}) => {
    useEffect(() =>{
        if(!isAuth){
            navigate("/login");
        }
    },);
    const [title,setTitle] = useState();
    const [postText,setPostText] = useState();
    const navigate = useNavigate();
    const createPost = async() =>{
        await addDoc(collection(db,"posts"),{
            title:title,
            postText:postText,
            author:{
                username: auth.currentUser.displayName,
                id: auth.currentUser.uid
                
            }
        })
        navigate("/");
    };
  return (
    <div className='createPostPage'>
        <div className='postContainer'>
            <h1>Post article</h1>
            <div className='inputPost'>
            <h3>Title</h3>
            <input type='text' placeholder='fill in the title' 
            onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='inputPost'>
            <h3>Contents</h3>
            <textarea placeholder='fill in the content' onChange={(e) =>
            setPostText(e.target.value)}></textarea>
            </div>
            <button className='postButton' onClick={createPost}>Post</button>
        </div>
    </div>
  );
};

export default Createpost;