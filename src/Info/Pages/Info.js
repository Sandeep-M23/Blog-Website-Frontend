import React, { useState, useEffect } from "react";
import Spinner from "../../Shared/Components/UI-Elements/Spinner";
import ErrorModal from "../../Shared/Components/UI-Elements/ErrorModal";
import { useHttpClient } from "../../Shared/Hooks/Http-Hooks";
import InfoCard from "../Components/InfoCard";
import { useParams } from "react-router";

const Info = () => {
  const [loadedBlog, setLoadedBlog] = useState();
  const { loading, error, sendRequest, clearError } = useHttpClient();
  const blogId = useParams().blogId;
  useEffect(() => {
    console.log(blogId);
    const fetchBlog = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/blogs/${blogId}`
        );
        setLoadedBlog(responseData.blog);
      } catch (err) {}
    };
    fetchBlog();
  }, [sendRequest, blogId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {loading && (
        <div className="center">
          <Spinner />
        </div>
      )}
      {!loading && loadedBlog && (
        <InfoCard
          key={loadedBlog.id}
          id={loadedBlog.id}
          title={loadedBlog.title}
          description={loadedBlog.description}
        />
      )}
    </React.Fragment>
  );
};

export default Info;
