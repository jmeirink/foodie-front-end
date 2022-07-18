import PostCard from "../../components/PostCard/PostCard";
import styles from "../../../src/App.css"

const PostList = (props) => {
  return (  
    <>
      <h1>Posts</h1>
        {props.posts.map(post =>
          <PostCard 
            key={post._id} 
            user={props.user} 
            post={post} 
            handleDeletePost={props.handleDeletePost} 
          />
        )}
    </>
  )
}

export default PostList;