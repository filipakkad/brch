import React from "react";
import { Alert } from "../alert/alert";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faExclamationCircle);

type ErrorAlertProps = {
	heading: string;
	body: string;
	isVisible: boolean;
};

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
