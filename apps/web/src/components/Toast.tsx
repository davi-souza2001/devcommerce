import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import UseToast from "../service/hook/useToast";

export function Toast() {
	const { open, msg, type } = UseToast()

	return (
		<Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: "right" }} autoHideDuration={6000}>
			<Alert severity={type}>
				{msg}
			</Alert>
		</Snackbar>
	)
}
