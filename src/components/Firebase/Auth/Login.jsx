import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = e.target;
    const email = data.email.value;
    const password = data.password.value;
    console.log(email, password);
    const auth = getAuth(app);
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className="bg-[#fde8ad46]">
      <h1 className="text-5xl text-center font-bold">This is logIn page</h1>
      <div className="w-fit my-10 shadow-y  shadow-xl shadow-[#3af03494] border-y-4  border-y-[#52ff3b] border-x-2 border-x-[#f207fa] p-3 mx-auto bg-[#daeff542]">
        <form onSubmit={handleLogin} className=" w-1/2  ml-10 ">
          <div className="">
            <label className="text-lg font-semibold " htmlFor="">
              Enter your Email <span className="text-red-600">*</span>
            </label>
            <input
              name="email"
              placeholder=" example@email.com"
              type="text"
              className="border-2 border-black rounded-xl p-1 w-80  "
            />
          </div>
          <div className="">
            <label className="text-lg font-semibold " htmlFor="">
              Enter your Password <span className="text-red-600">*</span>
            </label>
            <input
              name="password"
              placeholder="password"
              type="password"
              className="border-2 border-black rounded-xl p-1 w-80 "
            />
          </div>
          <div>
            <button className="btn bg-red-500 mx-auto text-white w-1-2 flex justify-center mt-3 hover:bg-transparent hover:text-red-600 hover:border-red-500 border-2 shadow-[#d19a03a8] w-1/2">
              LogIn
            </button>
          </div>
        </form>
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/registration")}
            className="text-red-500 font-semibold 
            hover:text-[#10ff08] text-lg mr-8 hover:text-xl "
          >
            New User?
          </button>
        </div>
        <div>
          <button
            className="btn  bg-[#fdd700] hover:text-[#f82d2d]  font-semibold w-full text-lg shadow-[#d19a03a8] hover:text-xl
          "
          >
            {" "}
            LogIn with Google
            <FcGoogle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
