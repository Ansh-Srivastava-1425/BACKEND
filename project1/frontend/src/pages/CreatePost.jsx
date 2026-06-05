import React from 'react'

const CreatePost = () => {
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
        <form action="/create-post" method="POST">
          <input type="file" name="image" accept="image/*" />
          <input type="text" name="caption" placeholder="Caption" required />
          <button type="submit">Create Post</button>
        </form>
    </section>
  )
}

export default CreatePost