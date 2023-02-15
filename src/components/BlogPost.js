import React from "react";

export default function blogPost(props) {
  return (
    <div className="blog-post">
      <h2 className="blog-title">{props.title}</h2>
      <div className="blog-author">
        By: <span>{props.author}</span>
      </div>
      <div className="blog-created">
        Post created on: <span>{props.created}</span>, at{" "}
        <span>{props.time}</span>
      </div>
      <p className="blog-content">{props.content}</p>
    </div>
  );
}
