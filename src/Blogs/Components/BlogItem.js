import React, { useState } from "react";

import Card from "../../Shared/Components/UI-Elements/Card";
import Button from "../../Shared/Components/Form-Elements/Button";
import Modal from "../../Shared/Components/UI-Elements/Modal";
import "./BlogItem.css";

const BlogItem = (props) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  //   const confirmDeleteHandler = async () => {
  //     setShowConfirmModal(false);
  //     try {
  //       await sendRequest(
  //         process.env.REACT_APP_BACKEND_URL + `/places/${props.id}`,
  //         'DELETE',
  //         null,
  //         {
  //           Authorization: 'Bearer ' + auth.token
  //         }
  //       );
  //       props.onDelete(props.id);
  //     } catch (err) {}
  //   };

  return (
    <React.Fragment>
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
            <Button danger>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this Blog? Please note that it can't
          be undone thereafter.
        </p>
      </Modal>
      <li className="blog-item">
        <Card className="blog-item__content">
          <div className="blog-item__image">
            <img
              src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt={props.title}
            />
          </div>
          <div className="blog-item__info">
            <h2>Title</h2>
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            fringilla velit nisl, id mattis purus ornare a. Proin imperdiet nibh
            libero, non pharetra enim facilisis id. Vestibulum scelerisque</p>
          </div>
          <div className="blog-item__actions">
            <Button type="button" to="/Info">
              READ MORE
            </Button>
            <Button inverse to="/UpdateBlog">EDIT</Button>
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
