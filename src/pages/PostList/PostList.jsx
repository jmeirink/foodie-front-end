import PostCard from "../../components/PostCard/PostCard";
import AddPost from "../AddPost/AddPost";
import styles from './PostList.module.css'
import { useState, useEffect } from "react";
import * as postService from '../../services/postService'

const PostList = (props) => {
  const {posts} = props

  return (  
    <>
      <div className="container">
        <AddPost handleAddPost={props.handleAddPost} />
        <h1>Posts</h1>
          {posts.map(post =>
            <PostCard 
              key={post._id} 
              user={props.user} 
              post={post} 
              handleDeletePost={props.handleDeletePost}
              handleLike={props.handleLike}
            />
          )}
      </div>
    </>
  )
}

export default PostList;