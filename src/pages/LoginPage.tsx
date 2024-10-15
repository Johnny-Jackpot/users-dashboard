import * as React from "react";

const LoginPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const login = formData.get('login');
    const password = formData.get('password');
    if (!login || !password) {
      alert('Provide login and password');
      return;
    }
  };

  return (
    <div className="flex justify-center items-center h-dvh">
      <form className="w-1/3" onSubmit={handleSubmit}>
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
