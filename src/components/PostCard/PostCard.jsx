import { Link } from "react-router-dom";
import styles from './PostCard.css'

const PostCard  = ({post, user, handleDeletePost, handleLike}) => {
  const postId = post._id
  const likeCount = post.likes.length
  const userLiked = post.likes.some(like => 
    like === user?.profile 
  )
  const isOwner = post.author._id === user?.profile
  return (  
    <>
      <div className="card">
        <Link className='text-link' to={`/posts/${post._id}`} state={{post}}>          
          <div className="card-body">
            <div className="container">
              <h3>{post.author?.name} had a {post.item?.itemTitle} at {post.restaurant?.title}</h3>
                <h4>{post.item?.itemPrice}</h4>
                  { post.photo ?
                    <img src={post?.photo} alt="" />
                        :
                    <img src="/Foodpic.jpg" alt="" />
                  }
            </div>
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
                    <span className="material-symbols-outlined">
                    heart_plus
                    </span>
                :
                    <span className="material-symbols-outlined">
                    heart_minus
                    </span>
                }
            </button>
            :
            <p>
              {likeCount}
              <span className="material-symbols-outlined">favorite</span>
            </p>
          }
        </div>
      </div>
    </>
  )
}

export default PostCard;