import React from 'react'
    
function Post(props) {
    
    return (
                <div className="post">
                    <div className="body">{props.body}</div>
                    <div className="title"> {props.title} </div>
                    <div className="footer">{props.footer}</div>
                </div>
    )
}

export default Post
