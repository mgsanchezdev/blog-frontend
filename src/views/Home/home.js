import React from 'react';

import Loading from '../../components/Loading/Loading';
import useGet from '../../hooks/useGet';
import Post from '../../components/Post/Post';
import './home.css';

const Home = () => {
  const [data, fetching] = useGet('posts');

  if (fetching) {
    return <Loading />;
  }

  return (
    <>
      <h1 className = "title-posts">Posts</h1>
      <div className="container-post">
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
