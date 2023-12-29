import React, { useState } from "react";
import PropTypes from "prop-types";
import { register } from "../src/utils/network"; // Updated import

function RegisterForm({ onRegisterSuccess, onRegister, navigate }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { error, data } = await register({ username, password });
      if (!error) {
        console.log(data, "onSubmitHandler");
        onRegisterSuccess();

        showNotification("Registrasi berhasil!", "success", () => {
          // Redirect to login page
          navigate("/");
        });
      } else {
        showNotification("Registrasi gagal. Silakan coba lagi.", "error");
      }
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  function showNotification(message, type, callback) {
    alert(message);
    if (callback) {
      callback();
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="register-form">
      <input
        className="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={onUsernameChangeHandler}
        required
      />
      <input
        className="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChangeHandler}
        required
      />
      <button>Daftar</button>
    </form>
  );
}

RegisterForm.propTypes = {
  onRegisterSuccess: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired, // Add this line
};

export { RegisterForm };
