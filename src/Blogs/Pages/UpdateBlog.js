import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import Input from "../../Shared/Components/Form-Elements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/Util/Validators";
import Button from "../../Shared/Components/Form-Elements/Button";
import Card from "../../Shared/Components/UI-Elements/Card";
import { useForm } from "../../Shared/Hooks/Form-Hooks";
import { useHttpClient } from "../../Shared/Hooks/Http-Hooks";
import Spinner from "../../Shared/Components/UI-Elements/Spinner";
import ErrorModal from "../../Shared/Components/UI-Elements/ErrorModal";
import {AuthContext} from '../../Shared/Context/authContext';
import "./BlogForm.css";

const UpdateBlog = () => {
  const [loadedBlog, setLoadedBlog] = useState();
  const { loading, error, sendRequest, clearError } = useHttpClient();
  const blogId = useParams().blogId;
  const auth = useContext(AuthContext);
  const history = useHistory();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    console.log(blogId)
    const fetchBlog = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/blogs/${blogId}`
        );
        setLoadedBlog(responseData.blog);
        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true,
            },
            description: {
              value: responseData.place.description,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {}
    };
    fetchBlog();
  }, [sendRequest, blogId, setFormData]);

  const updateBlogHandler = async(event) => {
    event.preventDefault();
    try{
      await sendRequest(
        `http://localhost:5000/blogs/${blogId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          'Content-Type':'application/json'
        }
      );
      history.push(`/${auth.userId}/blogs`)
    }catch(err){}
  }

  if (loading) {
    return (
      <div className="center">
        <Spinner />
      </div>
    );
  }

  if (!loadedBlog && !error) {
    return (
      <div className="center">
        <Card className="empty_Card">
          <h2>Could not find Blog!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!loading && loadedBlog && (
        <form className="blog-form" onSubmit={updateBlogHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            row={10}
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={inputHandler}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE BLOG
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdateBlog;
