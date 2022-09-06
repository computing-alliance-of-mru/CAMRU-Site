import React, { useEffect, useState } from "react";
import Logo from '../assets/camru-trimed.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

const Login = (props) => {

    // get request to get all the executive team members

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [data, setData] = useState(null);

    const login = () => {
        Axios({
          method: "POST",
          data: {
            username: loginUsername,
            password: loginPassword,
          },
          withCredentials: true,
          url: "http://localhost:5000/login",
        }).then((res) => {
            console.log(res)
            // store the user in the local storage
            window.location.href = "/controlpanel";
        });
      };
      const getUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:5000/user",
        }).then((res) => {
          setData(res.data);
        //   redirect to admin page

          console.log(res.data);
        });
      };


    return (
        <section class="h-screen">
            <ToastContainer />
            <div class="container px-6 py-12 h-full">
                <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            class="w-full"
                            alt="Phone image"
                        />
                    </div>
                    <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                        {/* <form action="http://localhost:5000/login/password" method="POST"> */}
                            {/* <!-- Email input --> */}
                            <div class="mb-6">
                                <input
                                    type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    id="username"
                                    name="username"
                                    onChange={(e) => setLoginUsername(e.target.value)}
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="mb-6">
                                <input
                                    type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    id="current-password" 
                                    name="password" 
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                />
                            </div>

                            <div class="flex justify-between items-center mb-6">
                                <div class="form-group form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-camru-blue checked:border-camru-blue focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck3"
                                    />
                                    <label class="form-check-label inline-block text-gray-800" htmlFor="exampleCheck3"
                                    >Remember me</label
                                    >
                                </div>
                                <a
                                    href="#!"
                                    class="text-camru-blue4 hover:text-camru-blue2 focus:text-camru-blue2 active:text-camru-blue duration-200 transition ease-in-out"
                                >Forgot password?</a
                                >
                            </div>

                            {/* <!-- Submit button --> */}
                            <button
                                type="submit"
                                class="inline-block px-7 py-3 bg-camru-blue4 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-camru-blue3 hover:shadow-lg focus:bg-camru-blue3 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-camru-blue-2 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                onClick={login}
                            >
                                Sign in
                            </button>

                            <div
                                class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p class="text-center font-semibold mx-4 mb-0">OR</p>
                            </div>

                            <a
                                class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                                style={{ 'background-color': '#3b5998' }}
                                href="#!"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                {/* <!-- Facebook --> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 320 512"
                                    class="w-3.5 h-3.5 mr-2"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                    /></svg>Continue with Facebook
                            </a>
                            <a
                                class="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                                style={{ 'background-color': '#55acee' }}
                                href="#!"
                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                {/* <!-- Twitter --> */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    class="w-3.5 h-3.5 mr-2"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    /></svg>Continue with Twitter
                            </a>
                        {/* </form> */}
                        
                        
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Login;