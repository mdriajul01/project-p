import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { app } from "../Firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const data = e.target;
    const name = data.name.value;
    const email = data.email.value;
    const password = data.password.value;
    const url = data.url.value;
    console.log(name, email, password, url);

    const auth = getAuth(app);
    if (name && email && password) {
      createUserWithEmailAndPassword(auth, name, email, password)
        .then((res) => {
          // Signed up
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className="bg-[#4e0e0e48]">
      <h1 className="text-5xl text-center font-semibold text-red-500 my-10">
        This is Registration Page
      </h1>
      <div className="bg-slate-100 w-fit my-10 shadow-y shadow-xl shadow-[#3af03494] border-y-4 border-y-[#52ff3b] border-x-2 border-x-[#f207fa] p-3 mx-auto">
        <form
          onSubmit={handleRegister}
          className="w-fit my-10 space-y-5 p-5 mx-auto"
        >
          <div>
            <label htmlFor="name" className="text-lg font-semibold">
              Enter Your Name:<span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full Name"
              className="border-2 p-1 w-72 border-black rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-lg font-semibold">
              Enter Your Email:<span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <input
              id="email"
              name="email"
              type="text"
              placeholder="example@email.com"
              className="border-2 p-1 w-72 border-black rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-lg font-semibold">
              Enter Your Password:<span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="border-2 p-1 w-72 border-black rounded-lg"
            />
          </div>
          <div>
            <label htmlFor="url" className="text-lg font-semibold">
              Enter Your Photo URL:<span className="text-red-600">*</span>
            </label>{" "}
            <br />
            <input
              id="url"
              name="url"
              type="text"
              placeholder="Type URL"
              className="border-2 p-1 w-72 border-black rounded-lg"
            />
          </div>
          <div className="text-center">
            <button className="btn bg-red-500 mx-auto text-white w-1/2 flex justify-center mt-3 hover:bg-transparent hover:text-red-600 hover:border-red-500 border-2 shadow-[#d19a03a8]">
              Registration
            </button>
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => navigate("/login")}
              className="text-red-500 font-bold hover:text-[#2da8b1ce] hover:text-lg hover:mt-1"
            >
              Already a User???
            </button>
          </div>
        </form>
        <div>
          <button className="btn bg-[#fdd700] hover:text-[#f82d2d] font-semibold w-full text-lg shadow-[#d19a03a8]">
            Registration with Google
            <FcGoogle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
