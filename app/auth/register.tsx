


export default function Register() {





  function signUp(e: Event) {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget as HTMLFormElement);
    const registeredEmail : string = formdata.get("regiEmail") as string;
  }

  return (
    <form onSubmit={(e) => signUp(e)}>
      <label>
        Email
        <input name="regiEmail" placeholder="Email" type="email"></input>
      </label>
      <label>
        Password{" "}
        <input name="regiPass" placeholder="Password" type="password"></input>
      </label>
      <label>
        Please verify your password
        <input name="regiPassV" placeholder="Password" type="password"></input>
      </label>
      <button type="submit">Sign up!</button>
    </form>
  );
}
