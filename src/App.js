import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  function handleprevious() {
    if (step > 1) setStep((s) => s - 1);
    if (step < 1) setStep(1);
  }
  function handlenext() {
    if (step < 3) setStep((s) => s + 1);
    if (step > 3) setStep(1);
  }
  return (
    <>
      <button className="close" onClick={() => setisOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <div className="message">
            {" "}
            Step {step}:{messages[step - 1]}
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handleprevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handlenext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
