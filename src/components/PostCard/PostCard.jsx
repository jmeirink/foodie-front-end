import { Link } from "react-router-dom";
import styles from './PostCard.css'




const PostCard  = ({post, user, handleDeletePost, handleLike}) => {
    const postId = post._id
    const likeCount = post.likes.length
    const userLiked = post.likes.some(like => 
        like === user.profile 
    )
    const isOwner = post.author._id === user.profile
    return (  
        <>
        <div className="card">
            <Link className='text-link' to={`/posts/${post._id}`} state={{post}}>
                
                <div className="card-body">
                    <h5>{post.author?.name} had a {post.item?.itemTitle} at {post.restaurant?.title}</h5>
                    <h5>{post.item?.itemPrice}</h5>
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

                <button className="comments btn" title="comments">
                <Link className='text-link' to={`/posts/${post._id}`} state={{post}}>
                <span className="material-symbols-outlined">chat</span>
                </Link>
                </button>
                { !isOwner ?
                <button className=" like btn" onClick={() => handleLike(postId)}> {likeCount}
                { !userLiked ?
                    <span class="material-symbols-outlined">
                    heart_plus
                    </span>
                :
                    <span class="material-symbols-outlined">
                    heart_minus
                    </span>
                }
                </button>
                :
                <p>
                {likeCount}
                <span class="material-symbols-outlined">favorite</span>
                </p>
                }
            </div>
        </div>
        </>
    )
}

export default PostCard;