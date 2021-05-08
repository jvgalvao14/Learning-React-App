import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Post from "./components/Post";

function App() {
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

export default App;
