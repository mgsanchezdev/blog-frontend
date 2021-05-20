import React from 'react';

export const PostDetailsContext = React.createContext(null);

export const PostDetailsProvider = ({ children }) => {
  const [post, setPost] = React.useState(null);
  return (
    <PostDetailsContext.Provider
      value={{
        post,
        setPost: (h) => setPost(h),
      }}
    >
      {children}
    </PostDetailsContext.Provider>
  );
};