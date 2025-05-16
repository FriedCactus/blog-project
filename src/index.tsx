import {createRoot} from 'react-dom/client';
import {App} from "app/App";
import {BrowserRouter} from "react-router";
import {ThemeProvider} from "app/providers/ThemeProvider/ui/ThemeProvider";
import "shared/i18n/i18n";

const domRootNode = document.getElementById('root');
const root = createRoot(domRootNode);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);