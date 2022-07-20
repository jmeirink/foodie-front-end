import { Link } from "react-router-dom";
import styles from './PostCard.css'

const PostCard  = ({post, user, handleDeletePost}) => {

    return (  
        <>
        <div className="card">
            <Link className='text-link' to={`/posts/${post._id}`} state={{post}}>
                <div className="card-body">
                    <h5>{post.author?.name} had a {post.item?.itemTitle} at {post.restaurant?.title} </h5>
                    <h3> {post.review}</h3>
                    <img src={post?.photo} alt="" />
                </div>
            </Link>

            <div className="post-footer">

            {user?.profile === post.author._id &&

                <div>
                <button className="delete btn" onClick={()=> handleDeletePost(post._id)}>
                    <span className="material-symbols-outlined">delete</span>
                </button>

                <button className="edit btn">
                <Link className='text-link' to='/edit' state={{post}} >
                    <span className="material-symbols-outlined">edit</span>
                </Link>
                </button>
                </div>
            }

                <button className="comments btn">
                <span class="material-symbols-outlined">chat</span>
                </button>

                <button className="like btn">
                <span className="material-symbols-outlined">favorite</span>
                </button>

            </div>
        </div>
        </>
    )
}

export default PostCard;