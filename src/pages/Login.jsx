import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { userAccountInfo } from "../slices/counterSlice";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const logeduserData = {
    userName : 'test account',
    userPhoto:'https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg',
  }
  const dispatch = useDispatch()


  const handelLogin = async (e) => {
    e.preventDefault();
    dispatch(userAccountInfo(logeduserData))
    localStorage.setItem('userData' , JSON.stringify(logeduserData))
    const options = {
      method: "POST",
      url: "https://api.freeapi.app/api/v1/users/login",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      data: userData,
    };

    try {
      const res = await axios.request(options);
      console.log(res.data.data.accessToken);
      localStorage.setItem("token", res.data.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.data.user));
      setTimeout(() => {
        navigate("/");
      }, 2000);
   
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error.response);
    }
  };
  return (
    <section className="h-screen flex items-center justify-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        rtl={false}
        theme="dark"
      />
      <form onSubmit={handelLogin}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login account
              </p>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  username
                </label>
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="username"
                  id="username"
                  type="text"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="password"
                  type="password"
                />
              </div>
              <button
                className="w-full cursor-pointer bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                type="submit"
              >
                Login
              </button>
              <p>
                Don't have an account? <Link to="/register">Registration</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
