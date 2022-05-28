import React from "react";
import { AlertCard, AlertBody, IconSection, AlertHeading, AlertContent } from "./alert-styling";

export type AlertProps = {
	iconIdentifier: string;
	heading: string;
	body: string;
	color: string;
	isVisible: boolean;
};

const Alert = (props: AlertProps) => {
	const { body, heading, color, iconIdentifier, isVisible } = props;
	return isVisible ? (
		<AlertCard>
			<IconSection color={color}>
				<span className="fa-stack">
					<i className="fa-solid fa-square fa-stack-2x" />
					<i className={`fab fa-solid ${iconIdentifier} fa-inverse fa-stack-1x`} />
				</span>
			</IconSection>
      <AlertContent>
        <AlertHeading>{heading}</AlertHeading>
        <AlertBody>{body}</AlertBody>
      </AlertContent>
		</AlertCard>
	) : <></>;
};

export { Alert };
