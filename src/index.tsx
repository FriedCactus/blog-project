import "app/styles/index.css";
import {createRoot} from 'react-dom/client';
import {App} from "app/App";
import {BrowserRouter} from "react-router";
import {ThemeProvider} from "app/providers/ThemeProvider/ui/ThemeProvider";
import {ErrorBoundary} from "app/providers/ErrorBoundary";
import {StoreProvider} from "app/providers/StoreProvider";
import "shared/config/i18n/i18n";

const domRootNode = document.getElementById('root');
const root = createRoot(domRootNode);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
);