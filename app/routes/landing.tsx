import { NavLink } from "react-router";
import "../app.css";

export default function Landing() {





  return (
    <>
      <header className="border-5 p-5">
        <h1 className="text-7xl">Life OS</h1>
      </header>
      <main className = 'flex flex-row min-w-full min-h-150 justify-around items-center'>
      <div className="min-h-full">
        <h2 className="text-5xl max-w-150">
          Put your life on track with Life OS goal tracking and progress
          graphing
        </h2>
        <div className='flex flex-row max-w-90 justify-around m-10 items-center'>
        <NavLink className='border-2 rounded-sm text-3xl p-2' to="/register">Sign Up!</NavLink>
        <p className='text-xl'>Or</p>
        <NavLink className='border-2 rounded-sm text-3xl p-2' to="/login">Log in</NavLink>
        </div>
      </div>
      <img src="" alt="Who even knows" />
      </main>
    </>
  );
}
