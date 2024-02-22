import {Fragment, useState} from 'react'
import {Link, Routes} from "react-router-dom";
import Api from '../../api/Api.jsx'

const Login = () => {

  const [email , setEmail] = useState("");
  const test =  () =>{
    const http = Api();
  }
  const [password , setPassword] = useState("");
  return (
      <Fragment>
        <div className="relative text-center">
            <span
                className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
          <div
              className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
        </div>
        {/* FORM */}
        <form className="grid grid-cols-1 gap-6" action="#" method="post">
          <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Email address
              </span>
            <input  type="email"
                    placeholder="example@example.com"
                    className="mt-1"/>
          </label>
          <label className="block">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Password
                <Link href="/login" className="text-sm underline font-medium">
                  Forgot password?
                </Link>
              </span>
            <input type="password" className="mt-1"/>
          </label>
          <button type="submit">Continue</button>
        </form>

        {/* ==== */}
        <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
          <Link href="/signup" className="font-semibold underline" >
              Create an account
            </Link>
          </span> <Routes>

      </Routes>
      </Fragment>
  )
}

export default Login
