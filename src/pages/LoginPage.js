import { useContext, useState } from "react";
import { logInUserService } from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const { token } = await logInUserService({ email, password });

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="pagelogin">
      <h1 className="logintitle">Login</h1>
      <form onSubmit={handleForm} className="form">
        <fieldset className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className="password">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button className="login">Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
