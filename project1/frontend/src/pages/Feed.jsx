import React, { useState , useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: 1,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "A beautiful sunset",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((res) => {
      setPosts(res.data.posts);
    })
      
  }, [])

  return (
    <div>
      <h1>Welcome to the Feed Page!</h1>

      <section className="feed-section">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="post-card">
              <img src={post.image} alt="Post" className="post-image" />
              <p className="post-caption">{post.caption}</p>
            </div>
          ))
        ) : (
          <h1>No posts available</h1>
        )}
      </section>
    </div>
  );
};

export default Feed;