import React from "react";
import "../assets/blog.css";

const Blog = () => {
  const posts = [
    {
      author: "Justin Noeller",
      created: "2023-02-13",
      title: "Hello World!",
      content:
        "Managed to get the posts to display how i'd like them, will have to see as time goes on... may need a sorting feature in the future.",
    },
    {
      author: "Justin Noeller",
      created: "2023-02-14",
      title: "Backend Success!",
      content: `While I may be a full-stack developer. I do sometimes feel a little to biased towards front-end work. That being said when my friend, Dylan, asked if I could help with some backend work, I jumped at the chance to refine my skills! The code was only to fetch data from his SQL database and track player data for a minecraft server plugin he's working on, but I managed to make it work and now I look forward to utilizing this through a website I'll be building for players to track different stats!`,
    },
  ];

  return (
    <div className="blog-container">
      <div className="blog-posts-container">
        {posts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h2 className="blog-title">{post.title}</h2>
            <div className="blog-author">
              By <span>{post.author}</span>
            </div>
            <div className="blog-created">
              Created on <span>{post.created}</span>
            </div>
            <div className="blog-content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
