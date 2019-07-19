import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";

export default function Login({ store, onLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", {
    userName: undefined
  });

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "white"
      },
      "& label.MuiFormLabel-root": {
        color: "white"
      },
      "& .MuiInput-underline": {
        borderBottomColor: "white"
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "white"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "red"
        },
        "&:hover fieldset": {
          borderColor: "yellow"
        },
        "&.Mui-focused fieldset": {
          borderColor: "white"
        }
      }
    }
  })(TextField);

  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };

    return [storedValue, setValue];
  }

  function onClick(e) {
    e.preventDefault();
    if (store.login(userName.toLowerCase(), password)) {
      //setUserName(e.target.value);
      setLoggedIn(store.loggedIn.id);
      onLogin();
    } else {
      alert("fel användarnamn/lösenord");
    }
  }

  return (
    <div className="login">
      <img className="login-img" src="skillsta.jpg" alt="skillsta" />

      <div className="login-img-wrapper">
        <Typography paragraph variant="h3">
          skillsta
        </Typography>
        <div className="login-user-name">
          <CssTextField
            id="standard-name"
            label="Namn"
            color="white"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            margin="normal"
          />
        </div>
        <div className="login-password">
          <CssTextField
            id="standard-name"
            label="Lösenord"
            color="white"
            value={userName}
            onChange={e => setPassword(e.target.value)}
            margin="normal"
          />
        </div>
        <Button variant="contained" onClick={e => onClick(e)}>
          LOGIN
        </Button>
      </div>
    </div>
  );
}
