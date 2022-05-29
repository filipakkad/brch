import styled from "styled-components";
import { AlertProps } from './alert'

type IconSectionProps = Pick<AlertProps, "color">;

export const AlertCard = styled.div`
  width: 332px;
	display: flex;
  flex-direction: row;
  align-items: flex-start;
	align-content: center;
	background-color: white; /* Red */
	color: black;
	margin-bottom: 1rem;
	border-radius: 1rem;
	border: 1px solid #EBECF0;;
  padding: 20px;
  gap: 16px;
`;

export const IconSection = styled.div<{ color: string }>`
	display: flex;
	color: ${(props: IconSectionProps) => props.color};
	font-weight: bold;
	font-size: larger;
	transition: 0.3s;
	flex: none;
    order: 0;
    flex-grow: 0;
`;

export const AlertContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  width: 244px;
`;

export const AlertBody = styled.div`
	text-align: left;
	font-family: "Gilroy-Regular";
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	letter-spacing: 0.005em;
	font-style: normal;
	color: #05060a;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  height: 40px;
`;

export const AlertHeading = styled.div`
	text-align: left;
	font-family: "Gilroy-SemiBold";
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	letter-spacing: 0.005em;
	color: #05060a;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  height: 20px;
`;
