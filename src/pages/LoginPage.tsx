import * as React from "react";
import axios from "axios";
import {useState} from "react";

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const login = formData.get('login');
    const password = formData.get('password');
    if (!login || !password) {
      alert('Provide login and password');
      return;
    }

    try {
      setLoading(true);
      await axios.get('/sanctum/csrf-cookie');
      const response = await axios.post('/api/login', {
        email: login,
        password,
      });

    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
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
        <button type="submit" className="border py-2 px-4 mb-2 rounded" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
