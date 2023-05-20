import { Box, Button, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";

export const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div className="flex flex-col border-2 p-[40px] shadow-md rounded-[10px] m-auto justify-center items-center">
      <div className="flex m-[10px] flex-col items-start">
        <h1 className="font-[Poppins]">Enter Your Email</h1>
        <TextField
          value={userData["email"]}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div className="flex m-[10px] flex-col items-start">
        <h1 className="font-[Poppins]">Enter Your Country</h1>
        <TextField
          value={userData["country"]}
          onChange={(e) =>
            setUserData({ ...userData, country: e.target.value })
          }
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div className="flex m-[10px] flex-col items-start">
        <h1 className="font-[Poppins]">Enter Your State</h1>
        <TextField
          value={userData["state"]}
          onChange={(e) => setUserData({ ...userData, state: e.target.value })}
          label="State"
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
          onClick={() => setStep(1)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="shadow-md z-[100]"
          onClick={() => setStep(3)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
