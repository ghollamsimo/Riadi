import {Fragment, useState} from 'react'
import {Link, Routes} from "react-router-dom";
import Api from '../../api/Api.jsx'
import Google from '../../assets/img/google.png'

const Login = () => {

  const [email , setEmail] = useState("");
  const test =  () =>{
    const http = Api();
  }
  const [password , setPassword] = useState("");
  return (
      <Fragment>
          <div className="container mb-24 lg:mb-32"><h2
              className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">Login</h2>
              <div className="max-w-md mx-auto space-y-6">
                  <div className="grid gap-3">
                      <a href="#" className="nc-will-change-transform flex w-full rounded-lg dark:bg-[#1F2937] px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]">
                          <img className="flex-shrink-0" src="./static/media/Facebook.c8b110290da41cf2d9e4312c085e008d.svg"
                      alt="Continue with Facebook"/>
                          <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                              Continue
                      with Facebook
                          </h3>
                      </a>

                      <a href="#" className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-gray-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]">
                          <img className="flex-shrink-0" src="./static/media/Twitter.5de92974108f200405da6d8ed49a998e.svg"
                      alt="Continue with Twitter"/>
                          <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">Continue
                      with Twitter
                          </h3>
                      </a>

                      <a href="#" className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-gray-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]">
                          <img className="flex-shrink-0" src="./static/media/Google.b9361a382296ba2cbc182016085b0cc8.svg"
                      alt="Continue with Google"/><h3
                      className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">Continue
                      with Google</h3></a></div>
                  <div className="relative text-center"><span
                      className="relative inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-[#111827] lg:z-50 sm:z-0 sm:bg-[#111827]">OR</span>
                      <div
                          className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-gray-700"></div>
                  </div>
                  <form className="grid grid-cols-1 gap-6" action="#" method="post"><label className="block"><span
                      className="text-neutral-800 dark:text-neutral-200">Email address</span>
                      <input type="email"
                                                                                                    className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                             placeholder="example@example.com"/></label>
                      <label
                      className="block"><span
                      className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Password<a
                      className="text-sm" href="/forgot-pass">Forgot password?</a></span><input type="password"
                                                                                                className="block w-full border border-gray-600 outline-0 text-white bg-white dark:bg-transparent rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"/></label>
                      <button
                          className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-[#4F46E5] hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                          type="submit">Continue
                      </button>
                  </form>
                  <span className="block text-center text-neutral-700 dark:text-neutral-300">New user?  <a
                      href="/signup">Create an account</a></span></div>
          </div>
      </Fragment>
  )
}

export default Login
