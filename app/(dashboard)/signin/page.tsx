"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Config } from "../../lib/config/config";

export default function page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const url = Config.apiUrl + "/api/admin/signin";
      const payload = {
        username,
        password,
      };

      const result = await axios.post(url, payload);
      if (result.data.token !== null) {
        localStorage.setItem(Config.tokenName, result.data.token);
      }
    } catch (err) {
      Swal.fire({
        title: "error",
        text: err.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border border-gray-300 bg-white flex flex-col gap-2 p-4 rounded-xl shadow-md">
        <h1 className="text-xl font-semibold">Sign In BackOffice</h1>
        <label>
          <p>username</p>
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          <p>password</p>
          <input
            type="password"
            className="border border-gray-300 rounded-md p-2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-4 py-2 s-lg mt-4"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
