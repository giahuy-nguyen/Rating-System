import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import styles from "./Login.module.css";
import AuthContext from "../components/Context/AuthProvider";

import axios from "../api/axios";
const LOGIN_URL = "/login";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ name: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
      console.log(response.data);
      // console.log(JSON.stringify(response));
      if (response.data === "Ok") {
        return setSuccess(true);
      } else {
        setErrMsg("Login failed");
        return setSuccess(false);
      }

      setUser("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else {
        setErrMsg("Login failed");
      }
    }
  };

  return (
    <>
      {success ? (
        <section className={styles.section}>
          <h1
            style={{
              textAlign: "center",
              fontweight: "bold",
            }}
          >
            Logged in
          </h1>
          <br />
          <p>
            <meta http-equiv="refresh" content="2; url = /admin" />
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </p>
          <h1
            style={{
              textAlign: "center",
              fontweight: "bold",
            }}
          >
            Log In
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            ></input>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            ></input>
            <button>Sign In</button>
          </form>
          <p>
            <a style={{ textAlign: "center" }} href="/">
              Continue as guest
            </a>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
