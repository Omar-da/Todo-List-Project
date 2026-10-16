import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment, useContext, useState } from "react";
import { Alert, Stack } from "@mui/material";

export default function Toast({isOpen, toastMessage}) {
  return (
    <div>
      <Snackbar open={isOpen}> 
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert variant="filled" severity="success" style={{direction: "rtl", display: "flex", alignItems: "center", gap: "5px"}}>
            {toastMessage}
          </Alert>
        </Stack>
      </Snackbar>
    </div>
  );
}
