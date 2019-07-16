import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

export default function Login({ store, onLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useLocalStorage("loggedIn", {
    userName: undefined
  });

  // useEffect(() => {
  //   console.log(window.localStorage.getItem("loggedIn"));

  //   if (!store.users.length) {
  //     return;
  //   }

  //   if (window.localStorage.getItem("loggedIn")) {
  //     if (store.login2(window.localStorage.getItem("loggedIn"))) {
  //       console.log("logged in");
  //       onLogin();
  //     } else {
  //       console.log(":(");
  //     }
  //   }
  // });

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
