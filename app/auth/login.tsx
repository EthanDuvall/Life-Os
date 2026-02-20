export default function Login() {
  return (
    <form>
      <h2>Welcome Back</h2>
      <input type="email" placeholder="Email" required></input>
      <input type="password" placeholder="Password" required></input>
      <input type="checkbox"></input>
      <button type="submit">Log in</button>
    </form>
  );
}
