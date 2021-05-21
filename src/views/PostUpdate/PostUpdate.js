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
      title: post.title || '',
      body: post.body || '',
    });
  }, [post]);

  const onSubmit = (formData) => {
    const formDataCopy = { ...formData };
    http.put(`posts/${post.id}`, formDataCopy).then((result) => {
      messageAlert('success', 'Post actualizado', result.data.title).then(
        () => {
          history.push('/');
        }
      );
    });
  };

  return (
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
              {...register('title')}
              placeholder="título"
            />
          </div>
          <div className="form-control">
            <label htmlFor="body">Post</label>
            <textarea
              maxLength="140"
              name="body"
              id="body"
              {...register('body')}
              placeholder="Contenido del post"
            />
          </div>
        </div>

        <div className="submit-button-wrapper">
          <Button type="submit" className="btn" variant="success">
            Modificar post
          </Button>
        </div>
      </form>
    </div>
  );
};
export default PostUpdate;
