import React from 'react'
    
function Post(props) {
    
    return (
                <div className="post">
                    <div className="title"> {props.title} </div>
                    <div className="body">{props.body}</div>
                    <div className="footer">{props.footer}</div>
                </div>
    )
}

export default Post
