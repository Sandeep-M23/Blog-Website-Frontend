import React, { useContext, useState } from "react";
import Card from "../../Shared/Components/UI-Elements/Card";
import Button from "../../Shared/Components/Form-Elements/Button";
import Modal from "../../Shared/Components/UI-Elements/Modal";
import Spinner from "../../Shared/Components/UI-Elements/Spinner";
import ErrorModal from "../../Shared/Components/UI-Elements/ErrorModal";
import {useHttpClient} from '../../Shared/Hooks/Http-Hooks';
import {AuthContext} from '../../Shared/Context/authContext'
import "./BlogItem.css";

const BlogItem = (props) => {
  const {loading,error,sendRequest,clearError} = useHttpClient();
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () =>{ 
    try{
      sendRequest(`http://localhost:5000/api/blogs/${props.id}`,'DELETE',null);
      props.onDelete(props.id)
    }catch(err){}
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="blog-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this Blog? Please note that it can't
          be undone thereafter.
        </p>
      </Modal>
      {loading && <Spinner />}
      <li className="blog-item">
        <Card className="blog-item__content">
          <div className="blog-item__image">
            <img
              src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt={props.title}
            />
          </div>
          <div className="blog-item__info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </div>
          <div className="blog-item__actions">
            <Button type="button" to={`/Info/${props.id}`}>
              READ MORE
            </Button>
            {auth.userId === props.creatorId && (
              <Button inverse to={`/blogs/${props.id}`}>EDIT</Button>
            )}
            <Button danger onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default BlogItem;
