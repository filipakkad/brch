import React from "react";
import { Alert } from "../alert/alert";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faInfoCircle);

type InfoAlertProps = {
	heading: string;
	body: string;
	isVisible: boolean;
};

const InfoAlert = (props: InfoAlertProps) => {
	const { heading, body, isVisible } = props;
	const iconIdentifier = "fa-circle-info";

	return (
		<Alert
			iconIdentifier={iconIdentifier}
			heading={heading}
			body={body}
			color="#3966d3"
			isVisible={isVisible}
		/>
	);
};

export { InfoAlert };
