

const PostDetails = (props) => {
  return (  
      <>
        <h1>Post Details</h1>
        {props.posts.map(post =>
          <div>
            <h2>Author: {post.author.name}</h2>
            <h2>ID: {post.author._id}</h2>
          </div>


          
        )}
        
        {/* Display post author */}
        {/* Display post details */}
        {/* Display a comments section */}
        {/* Display an add and delete button below each comment */}
      </>
  )
}

export default PostDetails;