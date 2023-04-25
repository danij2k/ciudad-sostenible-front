import { Link } from "react-router-dom";
import { ButtonResolve } from "./ButtonResolve";
import { Resuelto } from "./Resuelto";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Post = ({ post, uploadPost }) => {
  const { user } = useContext(AuthContext);
  return user ? (
    <article className="post">
      <Link to={`/posts/${post.id}`}>
        <h2 className="postTitle">{post.title}</h2>
      </Link>
      <ButtonResolve post={post} uploadPost={uploadPost} />
      <h3>{post.barrio}</h3>
      <img
        src={`${process.env.REACT_APP_BACKEND}/${post.photo}`}
        alt={post.text}
      />
      <Resuelto resuelto={post.resuelto} />
      <p>{post.text}</p>
      <p>Post uploat at {new Date(post.createdAt).toLocaleString()}</p>
    </article>
  ) : (
    <article className="post">
      <Link to={`/posts/${post.id}`}>
        <h2 className="postTitle">{post.title}</h2>
      </Link>
      <h3>{post.barrio}</h3>
      <img
        src={`${process.env.REACT_APP_BACKEND}/${post.photo}`}
        alt={post.text}
      />
      <Resuelto resuelto={post.resuelto} />
      <p>{post.text}</p>
      <p>Post uploat at {new Date(post.createdAt).toLocaleString()}</p>
    </article>
  );
};
