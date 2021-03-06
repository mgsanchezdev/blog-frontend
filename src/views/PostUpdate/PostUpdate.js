/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { PostDetailsContext } from '../../context/postDetails';
import http from '../../utils/http';
import { messageAlert } from '../../utils/alerts';
import './postUpdate.css';

const PostUpdate = () => {
  const { post } = React.useContext(PostDetailsContext);
  const history = useHistory();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset({
      title: post.title || 'default',
      body: post.body || 'default',
    });
  }, [post]);

  const onSubmit = (formData) => {
    const formDataCopy = { ...formData };
    if (formDataCopy.title !== '' && formDataCopy.body) {
      http.put(`posts/${post.id}`, formDataCopy).then((result) => {
        messageAlert('success', 'Post actualizado', result.data.title).then(
          () => {
            history.push('/');
          }
        );
      });
    } else {
      messageAlert(
        'error',
        'Error al editar el Post',
        'Complete todos los campos'
      );
    }
  };

  return (
    <div className = "container-post-update">
    <div className="edit-form">
      <h1 className="title-edit-post">Editar el post</h1>
      <form className="edit-form form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-control">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              name="title"
              id="title"
              ref={register}
              placeholder="título"
            />
          </div>
          <div className="form-control">
            <label htmlFor="body">Post</label>
            <textarea
              maxLength="140"
              name="body"
              id="body"
              ref={register}
              placeholder="Contenido del post"
            />
          </div>
        </div>

        <div className="submit-button-wrapper">
          <Button type="submit" className="btnUpdate" variant="success">
            Modificar post
          </Button>
        </div>
      </form>
    </div>
    </div>
  );
};
export default PostUpdate;
