import { useContext, useState } from "react";
import { solvePostService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const ButtonResolve = ({ post, uploadPost }) => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleClick = async () => {
    try {
      await solvePostService(post.id, { token });
      uploadPost();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <button onClick={() => handleClick()}>Click to resolve</button>
    </div>
  );
};
