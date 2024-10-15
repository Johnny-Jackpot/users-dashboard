import * as React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-dvh">
      <form className="w-1/3">
        <input
          type="text"
          name="login"
          placeholder="Login"
          className="w-full border py-2 px-4 mb-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border py-2 px-4 mb-2 rounded"
        />
        <button type="submit" className="border py-2 px-4 mb-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
