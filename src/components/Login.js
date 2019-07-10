import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function Login({ store, onLogin }) {
  
  return (
    <div>
      <div>Namn <input /></div>
      <div>Lösenord <input /></div>
      <Button variant="outlined" onClick={() => onLogin('Game')}>
        LOGIN
      </Button>
    </div>
  );
}
