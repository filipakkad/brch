import { StrictMode } from "react";

import App from "./App";

const rootElement = document.getElementById("root");
import ReactDOM from 'react-dom';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
