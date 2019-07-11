import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export default function Login({ store, onLogin }) {
  function onChange() {
    store.login("gk");
    onLogin("Game");
  }

  return (
    <div>
      <div>
        Användarnamn <input />
      </div>
      <div>
        Lösenord <input type="password" />
      </div>
      <Button variant="outlined" onClick={onChange}>
        LOGIN
      </Button>
    </div>
  );
}
