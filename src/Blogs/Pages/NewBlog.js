import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/Util/Validators";
import Input from "../../Shared/Components/Form-Elements/Input";
import Button from "../../Shared/Components/Form-Elements/Button";
import ImageUpload from "../../Shared/Components/Form-Elements/ImageUpload";
import Spinner from "../../Shared/Components/UI-Elements/Spinner";
import ErrorModal from "../../Shared/Components/UI-Elements/ErrorModal";
import { useHttpClient } from "../../Shared/Hooks/Http-Hooks";
import { useForm } from "../../Shared/Hooks/Form-Hooks";
import { AuthContext } from "../../Shared/Context/authContext";
import "./BlogForm.css";

const NewBlog = () => {
  const { loading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      // image: {
      //   value: null,
      //   isValid: false,
      // },
    },
    false
  );

  const history = useHistory();

  const blogSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        "http://localhost:5000/blogs/create",
        "POST",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          creator: auth.userId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      history.push("/");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {loading && <Spinner />}
      <form className="blog-form" onSubmit={blogSubmitHandler}>
        {/* <ImageUpload
          id="image"
          onInput={inputHandler}
          errorText="Please provide an image."
        /> */}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          row={10}
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="Please enter a valid description (at least 10 characters)."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD NEW BLOG
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewBlog;
