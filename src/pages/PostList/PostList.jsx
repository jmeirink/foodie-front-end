import PostCard from "../../components/PostCard/PostCard";
import styles from "../../../src/App.css"
import AddPost from "../AddPost/AddPost";

const PostList = (props) => {
    return (  
        <>
        <AddPost handleAddPost={props.handleAddPost} />
        <h1>Posts</h1>
        {props.posts.map(post =>
        <PostCard user={props.user} key={post._id} post={post} handleDeletePost={props.handleDeletePost} />
        
        )}
        
        </>
)
}
 
export default PostList;