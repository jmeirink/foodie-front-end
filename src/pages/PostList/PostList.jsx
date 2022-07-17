import PostCard from "../../components/PostCard/PostCard";

const PostList = (props) => {
    return (  
        <>
        <h1>Posts</h1>
        {props.posts.map(post =>
        <PostCard user={props.user} key={post._id} post={post} handleDeletePost={props.handleDeletePost} />
        
        )}
        
        </>
)
}
 
export default PostList;