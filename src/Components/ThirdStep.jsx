import { Button, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";

export const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div className="flex flex-col border-2 p-[40px] shadow-md rounded-[10px] m-auto justify-center items-center">
      <div className="flex m-[10px] flex-col items-start">
        <h1 className="font-[Poppins]">Enter Your City</h1>
        <TextField
          value={userData["city"]}
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div className="flex m-[10px] flex-col items-start">
        <h1 className="font-[Poppins]">Enter Your Landmark</h1>
        <TextField
          value={userData["landmark"]}
          onChange={(e) =>
            setUserData({ ...userData, landmark: e.target.value })
          }
          label="Landmark"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div className="flex m-[10px] flex-col items-start">
        <h1 className="font-[Poppins]">Enter Your Postal Code</h1>
        <TextField
          value={userData["postalCode"]}
          onChange={(e) =>
            setUserData({ ...userData, postalCode: e.target.value })
          }
          label="Postal Code"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div className="flex gap-[75px]">
        <Button
          variant="contained"
          color="secondary"
          className="shadow-md z-[100]"
          onClick={() => setStep(2)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="shadow-md z-[100]"
          onClick={() => submitData()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};
