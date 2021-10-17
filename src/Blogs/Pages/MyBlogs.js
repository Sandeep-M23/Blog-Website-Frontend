import React, { useState, useEffect } from "react";
import BlogList from "../Components/BlogList";
import Spinner from "../../Shared/Components/UI-Elements/Spinner";
import ErrorModal from "../../Shared/Components/UI-Elements/ErrorModal";
import { useHttpClient } from "../../Shared/Hooks/Http-Hooks";
import { useParams } from "react-router";

const MyBlogs = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const { loading, error, sendRequest, clearError } = useHttpClient();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/blogs/user/${userId}`
        );
        setMyBlogs(responseData.blogs);
      } catch (err) {}
    };
    fetchMyBlogs();
  }, [sendRequest, userId]);

  const blogDeleteHandler = (deletedBlogId) => {
    setMyBlogs((prevBlogs) =>
      prevBlogs.filter((blog) => blog.id !== deletedBlogId)
    );
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {loading && (
        <div className="center">
          <Spinner />
        </div>
      )}
      {!loading && myBlogs && (
        <BlogList items={myBlogs} onDeleteBlog={blogDeleteHandler} />
      )}
    </React.Fragment>
  );
};

export default MyBlogs;
