import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
function Posts(){
    const [posts, setPosts] = useState([]);
    const handle_like = (id) => {
        axios.post(`http://127.0.0.1:8000/api/posts/${id}/like_view/`)
        .then((res) => console.log(res.data))
    }
    const handle_dislike = (id) => {
        axios.post(`http://127.0.0.1:8000/api/posts/${id}/dislike_view/`)
        .then((res) => console.log(res.data))
    }
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/posts/roast_view/")
        .then((res) => setPosts(res.data))
    }, []);
    return (
        <div className="container-md">
            {posts.map((post) => (
                <Card style={{ width: '25rem' }} key={post.id}>
                <Card.Body>
                  <Card.Title>{post.boast ? 'Boast' : 'Roast'}</Card.Title>
                  <Card.Text>
                    {post.text} <br/>
                    Posted Date: {post.create_at} <br/>
                    Likes: {post.like} <br/>
                    Dislikes: {post.dislike} <br/>
                    Total Score: {post.score} <br/>
                  </Card.Text>
                  <Button 
                    variant="success" 
                    as="input" 
                    type="button"
                    onClick={() => handle_like(post.id)}
                    value="Up Vote" />
                    <Button 
                    variant="danger" 
                    as="input" 
                    type="button"
                    onClick={() => handle_dislike(post.id)}
                    value="Down Vote" />
                </Card.Body>
              </Card>
            )
            )}
        </div>
    )
}
export default Posts
