import "./Post.css"
export default function Post({post}) {
    return (<>
        <center className="post-container">
            <div className="img-container">
                <h1 className="name">{post.name}</h1>
            </div>
            <div className="post-info-container">
                <div className="header">
                    <div className="vertical left-align">
                        <div className="restaurant">restaurant</div>
                        <div className="organization">organization</div>
                        <div className="location">location</div>
                    </div>
                    <div className=" right-align vertical">
                        <div className="posted-date"> 2/23/24 </div>
                        <div className="posted-time"> 10:10 AM </div>
                        <div className="duration">duration</div>
                    </div>
                </div>
                <div className="items-container">
                    <h3> Available Items </h3>
                    <ul className="item-list">

                    </ul>
                </div>
                <div className="contact-info">
                    <h3> Contact Info </h3>
                    <div className="name"> name </div>
                    <div className="netid">netid</div>
                </div>
            </div>
        </center>
    </>)
}