import PostCard from "../../components/PostCard/PostCard";
import AddPost from "../AddPost/AddPost";
import styles from './PostList.module.css'

const PostList = (props) => {
    return (  
      <>
        <div className="container">
        <AddPost handleAddPost={props.handleAddPost} />
        <h1>Posts</h1>
        {props.posts.map(post =>
          <PostCard 
            key={post._id} 
            user={props.user} 
            post={post} 
            handleDeletePost={props.handleDeletePost}
          />
        )}
        </div>
      </>
  )
}

export default PostList;