import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div className="flex flex-col border-2 p-[40px] shadow-md rounded-[10px] m-auto justify-center items-center">
      <div className="flex m-[10px] flex-col items-start">
        <h1 className="font-[Poppins]">Enter Your First Name</h1>
        <TextField
          value={userData["firstname"]}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
          label="First name"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div className="flex m-[10px] flex-col items-start">
        <h1 className="font-[Poppins]">Enter Your Last Name</h1>
        <TextField
          value={userData["lastname"]}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div className="flex m-[10px] flex-col items-start">
        <h1 className="font-[Poppins]">Enter Your Contact Number</h1>
        <TextField
          value={userData["contactNumber"]}
          onChange={(e) =>
            setUserData({ ...userData, contactNumber: e.target.value })
          }
          label="Contact Number"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
      </div>
      <div>
        <Button
          variant="contained"
          color="primary"
          className="shadow-md z-[100]"
          onClick={() => setStep(2)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
