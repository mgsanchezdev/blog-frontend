/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import http from '../../utils/http';
import { messageAlert } from '../../utils/alerts';
import './postCreate.css';

const PostCreate = () => {
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    const formDataCopy = { ...formData };

    if (formDataCopy.title !== '' && formDataCopy.body) {
      http.post(`posts`, formDataCopy).then((result) => {
        messageAlert('success', 'Post creado', result.data.title).then(() => {
          history.push('/');
        });
      });
    } else {
      messageAlert(
        'error',
        'Error al crear el Post',
        'Complete todos los campos'
      );
    }
  };

  return (
    <div className="container-form-create">
      <div className="edit-form">
        <h1 className="title-edit-post">Crear el post</h1>
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
            <Button type="submit" className="btn" variant="success">
              Crear post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostCreate;
