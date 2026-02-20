import {NavLink} from "react-router"
import "../app.css"
export default function Landing() {




  return(
    <>
    <div className = "border-5 p-5">
      <h1 className="text-7xl">Life OS</h1>
    </div>
  <div>
    <h2>
        Put your life on track with Life OS goal tracking and progress graphing
    </h2>
    <NavLink to = "/register">Sign Up!</NavLink>
    <NavLink to = "/login">Log in</NavLink>
  </div>
  <img src='' alt='Who even knows'/>
  </>
  );
}
  