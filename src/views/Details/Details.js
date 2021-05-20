import React from 'react';

import { PostDetailsContext } from '../../context/postDetails';

import './details.css';

const Details = () => {
  const { post } = React.useContext(PostDetailsContext);
  return (
    <div className = "container-post-details">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Details;
