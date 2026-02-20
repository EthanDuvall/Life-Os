import {NavLink} from "react-router"


export default function Login() {
  return (
    <form>
      <h2>Welcome Back</h2>
      <label>
        Email
        <input type="email" placeholder="Email" required></input>
      </label>
      <label>
        Password
        <input type="password" placeholder="Password" required></input>
      </label>
      <button type="submit">Log in</button>
      <a>Or if you dont have an account <NavLink to="/register">register</NavLink></a>
    </form>
  );
}
