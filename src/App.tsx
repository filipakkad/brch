import {
	SuccessAlert,
	WarningAlert,
	ErrorAlert,
	InfoAlert,
} from "./components/molecues";
import FontStyles from "./apply_font";

const heading = "Basic alert title";
const body =
	"This is a message that displays a brief information message to the user";

export default function App() {
	return (
		<div className="App">
			<FontStyles />
			<SuccessAlert heading={heading} body={body} isVisible />
			<WarningAlert heading={heading} body={body} isVisible />
			<ErrorAlert heading={heading} body={body} isVisible />
			<InfoAlert heading={heading} body={body} isVisible />
		</div>
	);
}
