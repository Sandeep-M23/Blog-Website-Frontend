import React  from "react";
import HomeItem from "./HomeItem";
import Card from "../../Shared/Components/UI-Elements/Card";
import "./HomeList.css";

const HomeList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card className="empty_Card">
          <h2>No Blogs Found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="home-list__list">
      {props.items.map((blog) => (
        <HomeItem
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </ul>
  );
};

export default HomeList;
