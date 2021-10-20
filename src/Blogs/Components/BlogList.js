import React from "react";
import BlogItem from "./BlogItem";
import Card from "../../Shared/Components/UI-Elements/Card";
import Button from "../../Shared/Components/Form-Elements/Button";
import "./BlogList.css";

const BlogList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card className="empty_Card">
          <h2>No Blogs found. Maybe create one?</h2>
          <Button to="/blogs/new">Create New Blog</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="blog-list">
      {props.items.map((blog) => {
        return (
          <BlogItem
            key={blog.id}
            id={blog.id}
            image={blog.image}
            creatorId={blog.creator}
            title={blog.title}
            description={blog.description}
            onDelete={props.onDeleteBlog}
          />
        );
      })}
    </ul>
  );
};

export default BlogList;
