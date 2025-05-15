import {createRoot} from 'react-dom/client';
import {App} from "./App";
import {BrowserRouter} from "react-router";
import {ThemeProvider} from "./theme/ThemeProvider";

const domRootNode = document.getElementById('root');
const root = createRoot(domRootNode);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);