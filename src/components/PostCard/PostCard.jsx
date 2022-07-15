
const PostCard  = (props) => {
    return (  
        <>
        <div className="card">
            <div className="card-body">
                <h2 className="card-text">{props.post.review}</h2>
            </div>

        </div>
        </>
    )
}
 
export default PostCard;