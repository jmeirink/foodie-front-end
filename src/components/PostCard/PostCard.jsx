const PostCard  = (props) => {

    return (  
        <>
        <div className="card">
            <div className="card-body">
                <p>{props.post.author?.name}</p>
                <h2 className="card-text">{props.post.review}</h2>
            </div>
            {props.user?.profile === props.post.author._id &&
            <div className="post-footer">
                <button onClick={()=> props.handleDeletePost(props.post._id)}>Delete</button>
            </div>
            }
        </div>
        </>
    )
}

export default PostCard;