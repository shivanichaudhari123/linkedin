import Button from "@mui/material/Button";
import React from "react";
const Btn = () => {
  return (
    <div>
      <Button
        variant="outlined"
        defaultValue={30}
        sx={{
          width: 100,
          borderRadius: "30px",
        }}
      >
        Sign in
      </Button>
    </div>
  );
};
export default Btn;
