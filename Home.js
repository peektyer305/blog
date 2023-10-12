import React, { useEffect, useState } from 'react';
import {collection,deleteDoc,getDocs,doc} from "firebase/firestore";
import "./Home.css";
import {db,auth} from "../firebase";
const Home = () => {
    const [postList,setPostList] = useState([]);
    useEffect(() =>{
        const getPosts = async() =>{
            const data = await getDocs(collection(db,"posts"));
            
            setPostList(data.docs.map((doc) =>({...doc.data(),id:doc.id})));
           
        };
        getPosts();
    },[]);
    const handleDelete = async(id) =>{
        await deleteDoc(doc(db,"posts",id));
        window.location.href = "/";
    };
  return (
    <div className='home'>
        {postList.map((post) =>{
            return(
               
                <div className='postContents'key={post.id}>
        <div className='postHeader'>
            <h1>{post.title}</h1>
        </div>
        <div className='postText'>
                {post.postText}
        </div>
        <div className='nameAndDeleteButton'>
           <h3>{post.author.username}</h3>
           {post.author.id === auth.currentUser?.uid &&
           (<button onClick={()=> handleDelete(post.id)}>delete</button> )}
           
        </div>
        </div>
        
        
            );
        })}
        </div>
        
)
}

export default Home;