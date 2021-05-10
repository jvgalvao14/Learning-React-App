import React, { useEffect, useState } from "react";
import axios from "axios";

import Post from "../components/Post";

function Home() {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setPostList(response.data);
        });
    }, []);
    return (
        <div className="App">
            {postList.map((value, key) => {
                return (
                    <div>
                        <Post
                            title={value.title}
                            body={value.postText}
                            footer={value.username}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Home;
