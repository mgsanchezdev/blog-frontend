import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert';

import http from '../../utils/http';

import { PostDetailsContext } from '../../context/postDetails';

import './post.css';

const Post = ({ post }) => {
  const { setPost } = React.useContext(PostDetailsContext);

  const history = useHistory();

  const handlerDetails = () => {
    setPost(post);
    history.push('/detail');
  };

  const handlerEdit = () => {
    setPost(post);
    history.push('/update');
  };

  const handlerDelete = () => {
    Swal({
      title: 'Eliminar',
      text: 'Estas seguro que queres elimnar este post',
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
    }).then((response) => {
      if (response) {
        http.delete(`posts/${post.id}`);
        history.push('/');
      }
    });
  };

  return (
    <div className="container">
      <h4 className="title-post">Titulo: {post?.title}</h4>
      <hr />
      <div className="container-button">
        <Button variant="info" onClick={handlerDetails} className="btn-post">
          Detalle
        </Button>
        <Button onClick={handlerEdit} className="btn-post">
          Editar
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            handlerDelete();
          }}
          className="btn-post"
        >
          Elimnar
        </Button>
      </div>
    </div>
  );
};
export default Post;
