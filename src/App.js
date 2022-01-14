import "./App.css";
import React, { useState } from "react";
import Form from "./Components/Form/Form";
import StepTwo from "./Components/Form/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [step, setStep] = useState(1);
  return (
    <div className="App">
      {step === 1 ? (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          password2={password2}
          setPassword2={setPassword2}
          setStep={setStep}
        />
      ) : (
        <StepTwo name={name} email={email} password={password} />
      )}
    </div>
  );
}

export default App;
