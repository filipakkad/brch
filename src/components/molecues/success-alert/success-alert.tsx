import React from "react";
import { Alert, AlertProps } from "../alert/alert";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCircleCheck);

type SuccessAlertProps =  Pick<AlertProps, "heading" | "body" | "isVisible">;

const SuccessAlert = (props: SuccessAlertProps) => {
	const { heading, body, isVisible } = props;
	const iconIdentifier = "fa-circle-check";

	return (
		<Alert
			iconIdentifier={iconIdentifier}
			heading={heading}
			body={body}
			color="#25a77b"
			isVisible={isVisible}
		/>
	);
};

export { SuccessAlert };
