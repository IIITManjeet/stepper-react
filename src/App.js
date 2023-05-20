import "./App.css";
import { FirstStep } from "./Components/FirstStep";
import { SecondStep } from "./Components/SecondStep";
import { ThirdStep } from "./Components/ThirdStep";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./StepContext";
import { useContext } from "react";
import { DisplayData } from "./Components/DisplayData";

function App() {
  const { currentStep, finalData, userData } = useContext(multiStepContext);
  console.log(userData);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }
  return (
    <div className="App">
      <div className="flex flex-col m-auto w-full justify-center gap-[10px] items-center">
        <h3 className="text-[#880808] underline font-[Inter] text-[32px]">
          React Js Multi Stepper
        </h3>
        <div className="center-stepper">
          <Stepper
            className="w-[18%]"
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
        {finalData.length > 0 && <DisplayData />}
      </div>
    </div>
  );
}

export default App;
