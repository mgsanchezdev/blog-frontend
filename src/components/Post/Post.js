import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './post.css';

const Post = ({ post }) => {
  const history = useHistory();

  const handlerDetails = () => {
    history.push('/detail');
  };

  const handlerEdit = () => {
    history.push('/update');
  };

  const handlerDelete = () => {
    // llamar al hooks de eliminar
    history.push('/');
  };

  return (
    <div className="container">
      <h4 className = "title-post">Titulo: {post?.title}</h4>
      <hr />
      <div className="container-button">
        <Button variant="info" onClick={handlerDetails} className="btn-post">
          Detalle
        </Button>
        <Button onClick={handlerEdit} className="btn-post">
          Editar
        </Button>
        <Button variant="danger" onClick={handlerDelete} className="btn-post">
          Elimnar
        </Button>
      </div>
    </div>
  );
};
export default Post;
