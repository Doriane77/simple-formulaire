import React, { useState } from "react";
import Header from "../Header/Header";

function Form(props) {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    setStep,
  } = props;

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handlePassword2Change(event) {
    setPassword2(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (password != password2) {
      setError(true);
      // alert("mots passe pas identique");
    } else {
      setStep(2);
    }
  }
  function ubdateVisible() {
    setVisible(!visible);
    console.log(visible);
  }
  // console.log(name, email, password, password2);

  return (
    <div className="Form">
      <Header />
      <form onSubmit={handleSubmit} action="account">
        <h2>Name</h2>
        <input
          type="text"
          placeholder="Doriana"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <h2>Email</h2>
        <input
          type="email"
          name="email"
          placeholder="account@gmail.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <span onClick={ubdateVisible}>visible</span>
        <h2>PassWord</h2>
        <input
          className={error ? "erroe-bordure" : ""}
          type={visible ? "text" : "password"}
          name="password"
          placeholder="IdGFKanne2022"
          value={password}
          onChange={handlePasswordChange}
        />
        <h2>Confirm your password</h2>
        <input
          className={error ? "erroe-bordure" : ""}
          type="password"
          name="password2"
          placeholder="IdGFKanne2022"
          value={password2}
          onChange={handlePassword2Change}
        />
        <h3>{error ? "Mot de passe non identique" : ""}</h3>
        <button type="submit" name="submit" value="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
