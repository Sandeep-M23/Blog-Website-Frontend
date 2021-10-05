import React from 'react';

import {useForm} from '../../Shared/Hooks/Form-Hooks';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../Shared/Util/Validators';
import Input from '../../Shared/Components/Form-Elements/Input';
import Button from '../../Shared/Components/Form-Elements/Button';
import ImageUpload from '../../Shared/Components/Form-Elements/ImageUpload';
import './BlogForm.css';


const NewBlog = () => {
    const [formState, inputHandler] = useForm(
        {
          title: {
            value: '',
            isValid: false
          },
          description: {
            value: '',
            isValid: false
          },
          image: {
            value: null,
            isValid: false
          }
        },
        false
      );

    return (
      <React.Fragment>
        <form className="blog-form">
          <ImageUpload
            id="image"
            onInput={inputHandler}
            errorText="Please provide an image."
          />
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
}

export default NewBlog;