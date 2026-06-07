import React from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "http://localhost:3000/create-post",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Post created successfully!");
        e.target.reset();

        navigate("/feed");
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="create-post-section">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" required />
        <input type="text" name="caption" placeholder="Caption" required />
        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;