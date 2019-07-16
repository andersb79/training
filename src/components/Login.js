import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function Login({ store, onLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function onClick(e) {
    e.preventDefault();
    if (store.login(userName.toLowerCase(), password)) {
      onLogin();
    } else {
      alert("fel användarnamn/lösenord");
    }
  }

  return (
    <div>
      <div>
        Användarnamn{" "}
        <input value={userName} onInput={e => setUserName(e.target.value)} />
      </div>
      <div>
        Lösenord{" "}
        <input
          type="password"
          value={password}
          onInput={e => setPassword(e.target.value)}
        />
      </div>
      <Button variant="outlined" onClick={e => onClick(e)}>
        LOGIN
      </Button>
    </div>
  );
}
