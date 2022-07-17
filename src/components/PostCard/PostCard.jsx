import { Link } from "react-router-dom";

const PostCard  = ({post, user, handleDeletePost}) => {

    return (  
        <>
        <div className="card">
            <div className="card-body">
                <p>{post.author?.name}</p>
                <h2 className="card-text">{post.review}</h2>
            </div>
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