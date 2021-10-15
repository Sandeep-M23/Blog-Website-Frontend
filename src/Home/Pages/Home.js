import React, { useState, useEffect } from "react";
import HomeList from "../Components/HomeList";
import Spinner from "../../Shared/Components/UI-Elements/Spinner";
import ErrorModal from "../../Shared/Components/UI-Elements/ErrorModal";
import { useHttpClient } from "../../Shared/Hooks/Http-Hooks";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const { loading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const responseData = await sendRequest("http://localhost:5000/blogs");
        setBlogs(responseData.blogs);
      } catch (err) {}
    };
    fetchBlogs();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {loading && (
        <div className="center">
          <Spinner />
        </div>
      )}
      {!loading && blogs && <HomeList items={blogs} />}
    </React.Fragment>
  );
};

export default Home;
