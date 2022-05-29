import React from "react";
import { Alert, AlertProps } from "../alert/alert";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faExclamationCircle);

type WarningAlertProps = Pick<AlertProps, "heading" | "body" | "isVisible">;

const WarningAlert = (props: WarningAlertProps) => {
	const { heading, body, isVisible } = props;
	const iconIdentifier = "fa-circle-exclamation";

	return (
		<Alert
			iconIdentifier={iconIdentifier}
			heading={heading}
			body={body}
			color="#f9ad36"
			isVisible={isVisible}
		/>
	);
};

export { WarningAlert };
