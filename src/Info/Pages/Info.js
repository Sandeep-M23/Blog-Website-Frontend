import React, { useState, useEffect } from "react";
import Spinner from "../../Shared/Components/UI-Elements/Spinner";
import ErrorModal from "../../Shared/Components/UI-Elements/ErrorModal";
import { useHttpClient } from "../../Shared/Hooks/Http-Hooks";
import InfoCard from "../Components/InfoCard";
import { useParams } from "react-router";

const Info = () => {
  const { loading, error, sendRequest, clearError } = useHttpClient();
  const blogId = useParams().blogId;
  useEffect(() => {
    console.log(blogId);
    const fetchBlog = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/blogs/${blogId}`
        );
      } catch (err) {}
    };
    fetchBlog();
  }, [sendRequest]);


  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {loading && (
        <div className="center">
          <Spinner />
        </div>
      )}
      {!loading && <InfoCard />}
    </React.Fragment>
  );
};

export default Info;
