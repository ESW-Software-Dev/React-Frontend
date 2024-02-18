import Post from "./Posts/Post.jsx"
export default function DisplayPosts ({
    posts
}) {
    const listItems = posts.map (post => 
        <li key={post.id}>
            <Post post={post}/>
        </li>
    );
    return <ul>{listItems}</ul>
}