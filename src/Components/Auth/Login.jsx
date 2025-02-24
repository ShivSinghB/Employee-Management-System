import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    
    // console.log("email", email);
    // console.log("password", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            className="outline-none bg-transparent font-medium border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            required
            className="outline-none mt-3 bg-transparent font-medium border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-500"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="mt-7 text-white outline-none font-semibold border-none bg-emerald-600 hover:bg-emerald-700 transition-colors text-lg py-2 px-8 w-full rounded-full ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
