import { Link } from "react-router-dom";

const PostCard  = ({post, user, handleDeletePost}) => {

    return (  
        <>
        <div className="card">
            <Link to={`/posts/${post._id}`} state={{post}}>
                <div className="card-body">
                    <h2>{post.item?.itemTitle}</h2>
                    <h4 className="card-text">From: {post.restaurant?.title}</h4>
                    <p>Posted by: {post.author?.name}</p>
                </div>
            </Link>
            {user?.profile === post.author._id &&
            <div className="post-footer">
                <button onClick={()=> handleDeletePost(post._id)}>Delete</button>
                <Link to='/edit' state={{post}} >Edit</Link>
            </div>
            }
        </div>
        </>
    )
}

export default PostCard;