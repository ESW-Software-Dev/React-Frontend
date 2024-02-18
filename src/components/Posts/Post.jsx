import "./Post.css"
export default function Post({post}) {
    return (<>
        <center className="post-container">
            <h1 className="name">{post.name}</h1>
        </center>
    </>)
}