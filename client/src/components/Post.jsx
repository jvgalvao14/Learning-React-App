import React from 'react'

function Post(props) {
    return (
            <div className="post">
                        <h1>{props.title}</h1>
                        <h1>{props.body}</h1>
                        <h1>{props.footer}</h1>
            </div>
    )
}

export default Post
