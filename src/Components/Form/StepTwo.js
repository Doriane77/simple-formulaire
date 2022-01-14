import React from "react";
import Header from "../Header/Header2";

function StepTwo({ name, email, password }) {
  return (
    <div className="StepTwo">
      <Header />
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Password : {password}</p>
      <button
        type="submit"
        onClick={() => {
          // retourner sur le formulaire d'avant
          setStep(1);
        }}
      >
        Edit information
      </button>
    </div>
  );
}

export default StepTwo;
