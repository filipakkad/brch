import React from "react";
import { Alert, AlertProps } from "../alert/alert";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faExclamationCircle);

type ErrorAlertProps = Pick<AlertProps, "heading" | "body" | "isVisible">;

const ErrorAlert = (props: ErrorAlertProps) => {
	const { heading, body, isVisible } = props;
	const iconIdentifier = "fa-circle-xmark";

	return (
		<Alert
			iconIdentifier={iconIdentifier}
			heading={heading}
			body={body}
			color="#ee5236"
			isVisible={isVisible}
		/>
	);
};

export { ErrorAlert };
