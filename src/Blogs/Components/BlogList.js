import React from "react";
import BlogItem from "./BlogItem";
import Card from "../../Shared/Components/UI-Elements/Card";
import Button from '../../Shared/Components/Form-Elements/Button'
import "./BlogList.css";

const BlogList = props => {
//   if (props.items.length === 0) {
//     return (
//       <div className="place-list center">
//         <Card>
//           <h2>No places found. Maybe create one?</h2>
//           <Button to="/places/new">Share Place</Button>
//         </Card>
//       </div>
//     );
//   }

  return (
    <ul className="blog-list">
        <BlogItem/>
        <BlogItem/>
    </ul>
  );
};

export default BlogList;