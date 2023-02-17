import React from "react";
import "../assets/blog.css";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  const posts = [
    // {
    //   author: "Justin Noeller",
    //   created: "2023-02-13",
    //   time: "7:13pm",
    //   title: "Hello World!",
    //   content:
    //     "Managed to get the posts to display how i'd like them, will have to see as time goes on... may need a sorting feature in the future.",
    // },
    {
      author: "Justin Noeller",
      created: "2023-02-13",
      time: "7:13pm",
      title: "Hello World!",
      content:
        "Managed to get the posts to display how i'd like them, will have to see as time goes on... may need a sorting feature in the future.",
    },
    {
      author: "Justin Noeller",
      created: "2023-02-14",
      time: "9:34pm",
      title: "Backend Success!",
      content: `While I may be a full-stack developer. I do sometimes feel a little to biased towards front-end work. That being said when my friend, Dylan, asked if I could help with some backend work, I jumped at the chance to refine my skills! The code was only to fetch data from his SQL database and track player data for a minecraft server plugin he's working on, but I managed to make it work and now I hope to, once I have the free-time, create a website that can track these stats visually for the players to use!`,
    },
    {
      author: "Justin Noeller",
      created: "2023-02-14",
      time: "9:56pm",
      title: "Mapping!",
      content:
        "For now I think, since I'll be the only one posting on here, I'll just map these posts by passing in these props to my BlogPost component. I may use something like moment.js to sort these in the future as I add more. Unless I find a better way to go about it! Shoutout to Dylan for the suggestion. \nI Coded all through lunch and from 5-10 today. Luckily, I did take a break and celebrated Valentines day with Bri, but wouldn't have minded if I was given a few extra hours in the day to play some games as well.",
    },
    {
      author: "Justin Noeller",
      created: "2023-02-16",
      time: "9:29pm",
      title: "Brainstorm",
      content:
        "Working on some other ideas to improve this site. I kind of want to use this as my own coding playground. I may mess around making a few simple website games to work on some of my JS skill. My initial thought is to create a simple memory matching game through JS and CSS. Hopefully I'll have a little more energy after work tomorrow!",
    },
  ];

  return (
    <div className="blog-container">
      <div className="blog-posts-container">
        {posts.map((blog, i) => {
          return (
            <BlogPost
              key={i}
              title={blog.title}
              author="Justin Noeller"
              created={blog.created}
              time={blog.time}
              content={blog.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
