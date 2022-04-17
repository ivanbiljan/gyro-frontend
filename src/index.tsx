import "core-js/stable";
import { render } from "react-dom";
import { Provider } from "react-redux"; // import the provider
import { BrowserRouter } from "react-router-dom";
import "regenerator-runtime/runtime";
import { App } from "./app";
import "./index.scss";
import { store } from "./redux/store"; // import your store
import "./utils/language/languangeClient";

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    rootElement
);
